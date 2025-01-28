import React, { useState, useEffect } from "react";
import fetchUserTrainingPlan from "../../CustomComponents/UserSession/fetchUserTrainingPlan";
import fetchUserTrainingPlanWorkouts from "../../CustomComponents/UserSession/fetchUserTrainingPlanWorkouts";
import {AppRoot} from "@telegram-apps/telegram-ui";

const TrainingPlanTest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAllData = async () => {
            try {
                const trainingPlans = await fetchUserTrainingPlan();
                const allData = await Promise.all(
                    trainingPlans.map(async (plan) => {
                        const workouts = await fetchUserTrainingPlanWorkouts(plan.trainingPlanId);
                        return { ...plan, workouts };
                    })
                );
                setData(allData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User Training Plans and Workouts</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default TrainingPlanTest;