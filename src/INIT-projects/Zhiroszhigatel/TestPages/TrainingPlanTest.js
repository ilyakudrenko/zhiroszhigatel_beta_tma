import React, { useState, useEffect } from "react";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";
import {AppRoot} from "@telegram-apps/telegram-ui";

const TrainingPlanTest = () => {
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch training plans
                const plans = await fetchUserTrainingPlan();
                setTrainingPlans(plans);

                // Fetch workouts for all plans
                const allWorkouts = await Promise.all(
                    plans.map((plan) => fetchUserTrainingPlanWorkouts(plan.trainingPlanId))
                );
                setWorkouts(allWorkouts.flat());
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Training Plans</h1>
            <pre>{JSON.stringify(trainingPlans, null, 2)}</pre>
            <h1>Workouts</h1>
            <pre>{JSON.stringify(workouts, null, 2)}</pre>
        </div>
    );//redeploy

};

export default TrainingPlanTest;