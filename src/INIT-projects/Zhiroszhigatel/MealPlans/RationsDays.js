import React, {useEffect, useState} from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../Hooks/BackButton";
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import fetchUserMealPlanDaysMeals from "../../CustomComponents/UserSession/fetchUserMealPlanDaysMeals";
import {AppRoot, Button, Caption, Cell, Image, List, Section, Spinner, Title} from "@telegram-apps/telegram-ui";
import imageTitle from "./Images/imageTitle.jpg";
import INITDivider from "../../CustomComponents/Dividers/Divider";


const RationsDays = () => {

    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [mealPlanDaysMeals, setMealPlanDaysMeals] = useState([]);
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    INITBackButton();

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                setLoading(true);
                const data = await fetchUserMealPlan();
                console.log(data);
                const data_days = await fetchUserMealPlanDays();
                console.log(data_days);
                const data_meals = await fetchUserMealPlanDaysMeals();
                console.log(data_meals);
                setMealPlanDaysMeals(data_meals);
                setMealPlans(data);
                setMealPlanDays(data_days);
            } catch (err) {
                setError("Failed to fetch meal plans. Please try again.");
            } finally {
                setLoading(false);
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
    const filteredMeals = mealPlanDaysMeals.filter(
        (meal) => meal.meal_day_id === currentDay?.mealPlanDays_id
    );

    if (loading) {
        return (
            <AppRoot>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50vh", // Full viewport height to center vertically
                    }}
                >
                    <div style={{ textAlign: "center" }}>
                        <Spinner size="l" />
                        {" "}
                        <br />
                    </div>
                </div>
            </AppRoot>
        );
    }

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
            <List>

                <Image
                    src= {imageTitle}
                    style={{
                        width: '100%',
                        height: '40vh',
                        objectFit: 'cover',
                        borderRadius: '8px'
                    }}
                />

                {/* Заголовок плана питания */}
                <Title level="2" weight="bold" style={{ marginBottom: "10px" }}>
                    {mealPlans[0]?.mealPlan_title || "Meal Plan"}
                </Title>

                {/* Описание плана питания */}
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{ margin: "5%" }}
                    multiline
                >
                    {mealPlans[0]?.mealPlan_description || "No additional details available."}
                </Caption>

                <INITDivider color="transparent" thickness="10%" />

                {currentDay && (
                    <Title level="3" weight="bold" style={{ margin: "16px 0" }}>
                        День {currentDay.mealPlanDays_day_number}
                    </Title>
                )}

                {/* Детали текущего дня */}
                {currentDay && (
                    <Section header="Общие КБЖУ">
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
                )}

                <INITDivider color="transparent" thickness="10%" />

                {/* Данные о приемах пищи */}
                <div>
                    {filteredMeals.length > 0 ? (
                        filteredMeals.map((meal, index) => (
                            <Section key={index} header={`${meal.type || "Не указано"}`}>
                                <Cell multiline>
                                    <b>Состав:</b> {meal.composition || "Не указано"}
                                </Cell>
                                <Cell multiline>
                                    <b>Приготовление:</b> {meal.preparation || "Не указано"}
                                </Cell>
                                <Cell>
                                    <b>Калории:</b> {meal.kcal || 0} ккал
                                </Cell>
                                <Cell>
                                    <b>Белки:</b> {meal.protein || 0} г
                                </Cell>
                                <Cell>
                                    <b>Жиры:</b> {meal.fat || 0} г
                                </Cell>
                                <Cell>
                                    <b>Углеводы:</b> {meal.carbs || 0} г
                                </Cell>
                            </Section>
                        ))
                    ) : (
                        <p>Приемы пищи не найдены для текущего дня.</p>
                    )}
                </div>

                {/* Кнопки навигации */}
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
                        style={{
                            marginRight: "10px",
                        }}
                    >
                        <-
                    </Button>
                    <Button
                        mode="filled"
                        size="m"
                        disabled={currentDayIndex === mealPlanDays.length - 1}
                        onClick={handleNext}
                        style={{
                            marginLeft: "10px",
                        }}
                    >
                        ->
                    </Button>
                </div>
            </List>
        </AppRoot>
    );
};

export default RationsDays;