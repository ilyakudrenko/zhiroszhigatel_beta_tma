import React, { useState, useEffect } from 'react';
import { AppRoot, Button, Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import '@telegram-apps/telegram-ui/dist/styles.css';
import fetchUserMealPlan from "../../CustomComponents/UserSession/fetchUserMealPlan";
import fetchUserMealPlanDays from "../../CustomComponents/UserSession/fetchUserMealPlanDays";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBackButton from "../../../Hooks/BackButton";

const MealPlanTasting = () => {
    const [mealPlans, setMealPlans] = useState([]);
    const [mealPlanDays, setMealPlanDays] = useState([]);
    const [currentDayIndex, setCurrentDayIndex] = useState(0);
    const [error, setError] = useState(null);

    INITBackButton();

    useEffect(() => {
        const loadMealPlans = async () => {
            try {
                const data = await fetchUserMealPlan();
                const data_days = await fetchUserMealPlanDays();
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
            <List>
                {/* Meal Plan Title */}
                <Title level="2" weight="bold" style={{ marginBottom: "10px" }}>
                    {mealPlans[0]?.mealPlan_title || "Meal Plan"}
                </Title>

                {/* Meal Plan Description */}
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{ margin: '5%' }}
                    multiline
                >
                    {mealPlans[0]?.mealPlan_description || "No additional details available."}
                </Caption>

                {/* Current Day Details */}
                {currentDay && (
                    <Section>
                        <Title level="3" weight="bold" style={{ margin: "16px 0" }}>
                            День {currentDay.mealPlanDays_day_number}
                        </Title>
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

                {/* Pagination Buttons */}
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingBottom: '20px',
                        zIndex: 1000,
                    }}
                >
                    <Button
                        mode="filled"
                        size="m"
                        disabled={currentDayIndex === 0}
                        onClick={handleBack}
                        style={{
                            marginRight: '10px',
                        }}
                    >
                        Back
                    </Button>
                    <Button
                        mode="filled"
                        size="m"
                        disabled={currentDayIndex === mealPlanDays.length - 1}
                        onClick={handleNext}
                        style={{
                            marginLeft: '10px',
                        }}
                    >
                        Next
                    </Button>
                </div>
            </List>
        </AppRoot>
    );
};

export default MealPlanTasting;