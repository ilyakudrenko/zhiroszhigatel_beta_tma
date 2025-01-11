import React, {useEffect, useState} from 'react';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";


const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                setMealPlans(data);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            }
        };

        loadMealPlans();
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>User Meal Plans</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {mealPlans}
        </div>
    );
};

export default MealPlanTasting;