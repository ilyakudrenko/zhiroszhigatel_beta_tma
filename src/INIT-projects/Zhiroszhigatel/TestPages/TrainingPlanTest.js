import React, { useState, useEffect } from "react";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";

const TrainingPlanTest = () => {
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [selectedTrainingPlanId, setSelectedTrainingPlanId] = useState(null);
    const [workouts, setWorkouts] = useState([]);
    const [loadingPlans, setLoadingPlans] = useState(true);
    const [loadingWorkouts, setLoadingWorkouts] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch user training plans on component mount
        const fetchTrainingPlans = async () => {
            try {
                const plans = await fetchUserTrainingPlan();
                setTrainingPlans(plans);
                setLoadingPlans(false);
            } catch (err) {
                console.error("Error fetching training plans:", err);
                setError("Failed to fetch training plans. Please try again later.");
                setLoadingPlans(false);
            }
        };

        fetchTrainingPlans();
    }, []);

    const handleTrainingPlanClick = async (trainingPlanId) => {
        // Fetch workouts for the selected training plan
        setSelectedTrainingPlanId(trainingPlanId);
        setLoadingWorkouts(true);
        try {
            const fetchedWorkouts = await fetchUserTrainingPlanWorkouts(trainingPlanId);
            setWorkouts(fetchedWorkouts);
            setLoadingWorkouts(false);
        } catch (err) {
            console.error("Error fetching workouts:", err);
            setError("Failed to fetch workouts. Please try again later.");
            setLoadingWorkouts(false);
        }
    };

    if (loadingPlans) {
        return <div>Loading training plans...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>User Training Plans</h1>
            <div>
                {trainingPlans.length > 0 ? (
                    <div>
                        <h2>Available Training Plans</h2>
                        <ul>
                            {trainingPlans.map((plan) => (
                                <li key={plan.trainingPlanId}>
                                    <div onClick={() => handleTrainingPlanClick(plan.trainingPlanId)}>
                                        <img
                                            src={plan.imageSrc}
                                            alt={plan.title}
                                            style={{ width: "150px", height: "100px", objectFit: "cover" }}
                                        />
                                        <h3>{plan.title}</h3>
                                        <p>{plan.description}</p>
                                        <p>Price: ${plan.price}</p>
                                        <span>{plan.cardChip}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>No training plans found.</p>
                )}
            </div>

            {selectedTrainingPlanId && (
                <div>
                    <h2>Workouts for Selected Training Plan</h2>
                    {loadingWorkouts ? (
                        <div>Loading workouts...</div>
                    ) : workouts.length > 0 ? (
                        <ul>
                            {workouts.map((workout) => (
                                <li key={workout.trainingPlanWorkout_id}>
                                    <h3>{workout.trainingPlanWorkout_name}</h3>
                                    <p>{workout.trainingPlanWorkout_description}</p>
                                    <p>Order: {workout.trainingPlanWorkout_order_num}</p>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No workouts found for this training plan.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TrainingPlanTest;