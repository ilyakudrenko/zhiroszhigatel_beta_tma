import React, { useState, useEffect } from "react";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";
import {AppRoot} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserExercises from "../../CustomComponents/UserSession/fetchUserEcercises";
import fetchUserExercisesReps from "../../CustomComponents/UserSession/fetchUserExercisesReps";

const TrainingPlanTest = ( {trainingPlanId}) => {
    const [trainingPlans, setTrainingPlans] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [reps, setReps] = useState([]);

    const [loading, setLoading] = useState(true);

    INITBackButton();

    useEffect(() => {
        const fetchData = async () => {
            try {

                // Fetch training plans
                const plans = await fetchUserTrainingPlan();
                setTrainingPlans(plans);


                // Fetch workouts for all plans
                const allWorkouts = await fetchUserTrainingPlanWorkouts(trainingPlanId);
                setWorkouts(allWorkouts.flat());
                console.log(allWorkouts.flat());


                //Fetch exercises for all user workouts
                const allExercises = await Promise.all(
                    allWorkouts.map((allWorkouts) => fetchUserExercises(allWorkouts.trainingPlanWorkout_id))
                );
                setExercises(allExercises.flat());
                console.log(allExercises.flat());


                //Fetch reps for all exercises
                let tmp_rep = allExercises.flat();
                const allReps = await Promise.all(
                    tmp_rep.map(data => fetchUserExercisesReps(data.exerciseId))
                );
                console.log(allReps.flat());
                setReps(allReps.flat());


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

            <h1>Exercises</h1>
            <pre>{JSON.stringify(exercises, null, 2)}</pre>

            <h1>Reps</h1>
            <pre>{JSON.stringify(reps, null, 2)}</pre>

        </div>
    );

};

export default TrainingPlanTest;