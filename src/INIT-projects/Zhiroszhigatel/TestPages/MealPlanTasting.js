import React, {useEffect, useState} from 'react';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import {AppRoot, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../CustomComponents/Dividers/Divider";


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

    if(error){
        return (
            <AppRoot>
                <Section>
                    <p style={{color: "red", textAlign: "center"}}>
                        {error}
                    </p>
                </Section>
            </AppRoot>
        );
    }

    return (
        <AppRoot>
            <List>
                {mealPlanDays.map((day, index) => (
                    <div key={index}>
                        <Image
                            src="https://via.placeholder.com/600x300.png?text=Meal+Plan+Image" // Example image
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderRadius: "10px",
                            }}
                        />
                        <Section>
                            <Title level="1" weight="bold">
                                Day {day.mealPlanDays_day_number}
                            </Title>
                            <Caption level="1" weight="3">
                                Date: {new Date().toLocaleDateString()}
                            </Caption>
                            <INITDivider color="transparent" thickness="10%" />
                            <Title level="3" weight="bold">
                                Macros:
                            </Title>
                            <Cell multiline>
                                Calories: {day.mealPlanDays_total_kcal} kcal
                            </Cell>
                            <Cell multiline>
                                Proteins: {day.mealPlanDays_total_protein} g
                            </Cell>
                            <Cell multiline>
                                Fats: {day.mealPlanDays_total_fat} g
                            </Cell>
                            <Cell multiline>
                                Carbs: {day.mealPlanDays_total_carbs} g
                            </Cell>
                            <INITDivider color="transparent" thickness="10%" />
                            <Title level="3" weight="bold">
                                Meals:
                            </Title>
                            {mealPlans.map((plan, planIndex) => (
                                <Cell key={planIndex} multiline>
                                    <b>{plan.mealPlan_title}</b>: {plan.mealPlan_description}
                                </Cell>
                            ))}
                        </Section>
                    </div>
                ))}
            </List>
        </AppRoot>

        // <AppRoot>
        //     <div style={{padding: "20px", textAlign: "center"}}>
        //         <h1>User Meal Plans</h1>
        //         {error && <p style={{color: "red"}}>{error}</p>}
        //         {!error && (
        //             <p>
        //                 {JSON.stringify(mealPlans, null, 2)}
        //             </p>
        //         )}
        //     </div>
        //     <div style={{padding: "20px", textAlign: "center"}}>
        //         <h1>User Meal Plans By Days</h1>
        //         {error && <p style={{color: "red"}}>{error}</p>}
        //         {!error && (
        //             <p>
        //                 {JSON.stringify(mealPlanDays, null, 2)}
        //             </p>
        //         )}
        //     </div>
        // </AppRoot>
    );
};

export default MealPlanTasting;