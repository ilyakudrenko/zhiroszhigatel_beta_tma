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
//sdfsdfs
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
        <AppRoot>
            <Title level="2" weight="bold" style={{ marginBottom: "10px", textAlign: "center" }}>
                {mealPlans[0]?.mealPlan_title || "Meal Plan"}
            </Title>

            <Caption caps level="1" weight="3" style={{ margin: "5%", textAlign: "center" }}>
                {mealPlans[0]?.mealPlan_description || "No additional details available."}
            </Caption>

            {currentDay && (
                <>
                    <Section header={`День ${currentDay.mealPlanDays_day_number}`}>
                        <Cell>
                            <b>Общие калории:</b> {currentDay.mealPlanDays_total_kcal} ккал
                        </Cell>
                        <Cell>
                            <b>Белки:</b> {currentDay.mealPlanDays_total_protein} гр
                        </Cell>
                        <Cell>
                            <b>Жиры:</b> {currentDay.mealPlanDays_total_fat} гр
                        </Cell>
                        <Cell>
                            <b>Углеводы:</b> {currentDay.mealPlanDays_total_carbs} гр
                        </Cell>
                    </Section>

                    <INITDivider color="transparent" thickness="10%" />

                    <Section header="Приёмы пищи">
                        {mealPlanDaysMeals
                            .filter(meal => meal.mealPlanDays_day_number === currentDay.mealPlanDays_day_number)
                            .map((meal, index) => (
                                <Cell key={index} multiline subhead={meal.type}>
                                    <b>Состав:</b> {meal.composition || "Не указано"} <br />
                                    <b>Приготовление:</b> {meal.preparation || "Не указано"} <br />
                                    <b>Калории:</b> {meal.kcal || 0} ккал <br />
                                    <b>Белки:</b> {meal.protein || 0} г <br />
                                    <b>Жиры:</b> {meal.fat || 0} г <br />
                                    <b>Углеводы:</b> {meal.carbs || 0} г
                                </Cell>
                            ))}
                    </Section>
                </>
            )}

            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    paddingBottom: "20px",
                    zIndex: 1000,
                }}
            >
                <Button
                    mode="filled"
                    size="m"
                    disabled={currentDayIndex === 0}
                    onClick={handleBack}
                    style={{ marginRight: "10px" }}
                >
                    Back
                </Button>
                <Button
                    mode="filled"
                    size="m"
                    disabled={currentDayIndex === mealPlanDays.length - 1}
                    onClick={handleNext}
                    style={{ marginLeft: "10px" }}
                >
                    Next
                </Button>
            </div>
        </AppRoot>
    );
};

export default MealPlanTasting;