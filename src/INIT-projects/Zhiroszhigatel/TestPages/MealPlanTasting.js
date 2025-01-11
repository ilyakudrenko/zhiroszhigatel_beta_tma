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
            {mealPlans.length > 0 ? (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    {mealPlans.map((mealPlan) => (
                        <li
                            key={mealPlan.mealPlan_id}
                            style={{
                                marginBottom: "15px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                borderRadius: "5px",
                                textAlign: "left",
                                maxWidth: "400px",
                                margin: "0 auto 15px",
                            }}
                        >
                            <h3>{mealPlan.mealPlan_title}</h3>
                            <p>{mealPlan.mealPlan_description || "No description available."}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading meal plans...</p>
            )}
        </div>
    );
};

export default MealPlanTasting;