import React, {useEffect, useState} from 'react';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import {AppRoot, Caption, Cell, List, Section, Title} from "@telegram-apps/telegram-ui";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";


const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [error, setError] = useState(null);

    INITBackButton();

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
                <Title level="2" weight="bold" style={{marginBottom: "10px"}}>
                    {mealPlans[0]?.mealPlan_title || "Meal Plan"}
                </Title>
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{margin: '5%'}}
                    multiline
                >
                    {mealPlans[0]?.mealPlan_description || "No additional details available."}
                </Caption>
                {mealPlanDays.map((day, index) => (
                    <Section key={index} header={`День ${day.mealPlanDays_day_number}`}>
                        <Cell>
                            <b>Общие калории:</b> {day.mealPlanDays_total_kcal} ккал
                        </Cell>
                        <Cell>
                            <b>Белки:</b> {day.mealPlanDays_total_protein} гр
                        </Cell>
                        <Cell>
                            <b>Жиры:</b> {day.mealPlanDays_total_fat} гр
                        </Cell>
                        <Cell>
                            <b>Углеводы:</b> {day.mealPlanDays_total_carbs} гр
                        </Cell>
                    </Section>
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