import React, {useEffect, useState} from 'react';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import {AppRoot} from "@telegram-apps/telegram-ui";


const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                console.log(data);
                setMealPlans(data);
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
        </AppRoot>
    );
};

export default MealPlanTasting;