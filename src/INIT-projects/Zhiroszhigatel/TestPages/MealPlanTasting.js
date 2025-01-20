import React, { useState, useEffect } from 'react';
import { AppRoot, Button, Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";
import fetchAllMeals from "../../CustomComponents/UserSession/fetchAllMeals";
import fetchUserMealPlanDaysMeals from "../../CustomComponents/UserSession/fetchUserMealPlanDaysMeals";

const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [mealPlanDaysMeals, setMealPlanDaysMeals] = useState([]);
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
    const [error, setError] = useState(null);

    INITBackButton();

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                const data_days = await fetchUserMealPlanDays();
                const data_meals = await fetchUserMealPlanDaysMeals();
                setMealPlanDaysMeals(data_meals);
                setMealPlans(data);
                setMealPlanDays(data_days);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            }
        };

        loadMealPlans();
    }, []);

    const handleNext = () => {
        if (currentDayIndex < mealPlanDays.length - 1) {
            setCurrentDayIndex(currentDayIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentDayIndex > 0) {
            setCurrentDayIndex(currentDayIndex - 1);
        }
    };

    const currentDay = mealPlanDays[currentDayIndex];

    if (error) {
        return (
            <AppRoot>
                <Section>
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                </Section>
            </AppRoot>
        );
    }

    return (
        // <AppRoot>
        //     <List>
        //
        //         <div style={{padding: "20px", textAlign: "center"}}>
        //             <h1>User Meal Plans</h1>
        //             {error && <p style={{color: "red"}}>{error}</p>}
        //             {!error && (
        //                 <p>
        //                     {JSON.stringify(mealPlans, null, 2)}
        //                 </p>
        //             )}
        //         </div>
        //         <div style={{padding: "20px", textAlign: "center"}}>
        //             <h1>User Meal Plans By Days</h1>
        //             {error && <p style={{color: "red"}}>{error}</p>}
        //             {!error && (
        //                 <p>
        //                     {JSON.stringify(mealPlanDays, null, 2)}
        //                 </p>
        //             )}
        //         </div>
        //
        //         <INITDivider color="transparent" thickness="10%"/>
        //
        //         {/* Meal Plan Title */}
        //         <Title level="2" weight="bold" style={{marginBottom: "10px"}}>
        //             {mealPlans[0]?.mealPlan_title || "Meal Plan"}
        //         </Title>
        //
        //         {/* Meal Plan Description */}
        //         <Caption
        //             caps
        //             level="1"
        //             weight="3"
        //             style={{margin: '5%'}}
        //             multiline
        //         >
        //             {mealPlans[0]?.mealPlan_description || "No additional details available."}
        //         </Caption>
        //
        //         {/* Current Day Details */}
        //         {currentDay && (
        //             <Section>
        //                 <Title level="3" weight="bold" style={{margin: "16px 0"}}>
        //                     День {currentDay.mealPlanDays_day_number}
        //                 </Title>
        //                 <Cell>
        //                     <b>Общие калории:</b> {currentDay.mealPlanDays_total_kcal} ккал
        //                 </Cell>
        //                 <Cell>
        //                     <b>Белки:</b> {currentDay.mealPlanDays_total_protein} гр
        //                 </Cell>
        //                 <Cell>
        //                     <b>Жиры:</b> {currentDay.mealPlanDays_total_fat} гр
        //                 </Cell>
        //                 <Cell>
        //                     <b>Углеводы:</b> {currentDay.mealPlanDays_total_carbs} гр
        //                 </Cell>
        //             </Section>
        //         )}
        //
        //         <INITDivider color="transparent" thickness="10%"/>
        //
        //         {/* Pagination Buttons */}
        //         <div
        //             style={{
        //                 position: 'fixed',
        //                 bottom: 0,
        //                 left: 0,
        //                 width: '100%',
        //                 display: 'flex',
        //                 justifyContent: 'center',
        //                 paddingBottom: '20px',
        //                 zIndex: 1000,
        //             }}
        //         >
        //             <Button
        //                 mode="filled"
        //                 size="m"
        //                 disabled={currentDayIndex === 0}
        //                 onClick={handleBack}
        //                 style={{
        //                     marginRight: '10px',
        //                 }}
        //             >
        //                 Back
        //             </Button>
        //             <Button
        //                 mode="filled"
        //                 size="m"
        //                 disabled={currentDayIndex === mealPlanDays.length - 1}
        //                 onClick={handleNext}
        //                 style={{
        //                     marginLeft: '10px',
        //                 }}
        //             >
        //                 Next
        //             </Button>
        //         </div>
        //     </List>
        // </AppRoot>
        <AppRoot>
        <div>
            <h1>Meal Plans</h1>
            {error && <p style={{color: "red"}}>Error: {error}</p>}
            <ul>
                {mealPlans.length > 0 ? (
                    mealPlans.map((meal, index) => (
                        <li key={index}>
                            <pre>{JSON.stringify(meal, null, 2)}</pre>
                        </li>
                    ))
                ) : (
                    <p>Loading or no meal plans available...</p>
                )}
            </ul>
        </div>
        </AppRoot>
    );


    // const [meals, setMeals] = useState([]);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const loadMeals = async () => {
    //         try {
    //             const data = await fetchAllMeals();
    //             setMeals(data);
    //         } catch (err) {
    //             setError("Failed to load meals.");
    //         }
    //     };
    //
    //     loadMeals();
    // }, []);
    //
    // if (error) {
    //     return <p style={{ color: "red" }}>{error}</p>;
    // }
    //
    // return (
    //     <AppRoot>
    //         <List>
    //             <Title level="2" weight="bold" style={{ marginBottom: "10px" }}>
    //                 Meals Table
    //             </Title>
    //             {meals.map((meal) => (
    //                 <Section key={meal.id} header={`Meal Type: ${meal.type}`}>
    //                     <Cell>
    //                         <b>ID:</b> {meal.id}
    //                     </Cell>
    //                     <Cell>
    //                         <b>Meal Plan Day ID:</b> {meal.meal_plan_day_id}
    //                     </Cell>
    //                     <Cell>
    //                         <b>Composition:</b> {meal.composition}
    //                     </Cell>
    //                 </Section>
    //             ))}
    //         </List>
    //     </AppRoot>
    // );

};

export default MealPlanTasting;