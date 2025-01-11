import React, {useEffect, useState} from 'react';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import {AppRoot} from "@telegram-apps/telegram-ui";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";


const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                const data_days = await fetchUserMealPlanDays();
                console.log(data);
                console.log(data_days);
                setMealPlans(data);
                setMealPlanDays(data_days);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            }
        };

        loadMealPlans();
    }, []);

    return (
        <AppRoot>
            <div style={{padding: "20px", textAlign: "center"}}>
                <h1>User Meal Plans</h1>
                {error && <p style={{color: "red"}}>{error}</p>}
                {!error && (
                    <p>
                        {JSON.stringify(mealPlans, null, 2)}
                    </p>
                )}
            </div>
            <div style={{padding: "20px", textAlign: "center"}}>
                <h1>User Meal Plans By Days</h1>
                {error && <p style={{color: "red"}}>{error}</p>}
                {!error && (
                    <p>
                        {JSON.stringify(mealPlanDays, null, 2)}
                    </p>
                )}
            </div>
        </AppRoot>
    );
};

export default MealPlanTasting;