import React, { useState } from 'react';
import '@telegram-apps/telegram-ui/dist/styles.css';
import INITBackButton from "../../../Hooks/BackButton";
import { AppRoot, Button, Caption, Cell, Image, List, Section, Title } from "@telegram-apps/telegram-ui";
import INITDivider from "../../CustomComponents/Dividers/Divider";
import INITBuyButton from "./BuyButton";

// Импортируйте JSON данные
import rationsData from "./Rations.json";

const RationsDays = () => {
    INITBackButton();

    // Состояние для текущего рациона
    const [currentRationIndex, setCurrentRationIndex] = useState(0);

    // Обработка кнопок
    const handleNext = () => {
        if (currentRationIndex < rationsData.length - 1) {
            setCurrentRationIndex(currentRationIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentRationIndex > 0) {
            setCurrentRationIndex(currentRationIndex - 1);
        }
    };

    const currentRation = rationsData[currentRationIndex];

    return (
        <AppRoot>
            <List>
                {/* Отображение текущего рациона */}
                <Image
                    src={currentRation.dietPlan.meals[0]?.photo || "#"} // Используем первое фото из рациона или placeholder
                    style={{
                        width: '100%',
                        height: '40vh',
                        objectFit: 'cover',
                        borderRadius: '0px'
                    }}
                />

                {/* Заголовок */}
                <Title level="1" weight="bold" style={{ margin: '16px 16px 8px' }}>
                    {`Рацион #${currentRation.dietPlan.id}`}
                </Title>

                <INITDivider color="transparent" thickness="10%" />

                {/* Цель */}
                <Caption
                    caps
                    level="1"
                    weight="3"
                    style={{ margin: '5%' }}
                >
                    {currentRation.dietPlan.goal}
                </Caption>

                {/* Информация о рационе */}
                <Section>
                    <Cell multiline subhead="Калорийность">
                        {`${currentRation.dietPlan.calories} ккал`}
                    </Cell>
                    <Cell multiline subhead="Макросы">
                        {`Белки: ${currentRation.dietPlan.macros.proteins} г | Жиры: ${currentRation.dietPlan.macros.fats} г | Углеводы: ${currentRation.dietPlan.macros.carbohydrates}`}
                    </Cell>
                </Section>

                <INITDivider color="transparent" thickness="10%" />

                {/* Отображение всех приёмов пищи */}
                <Section header="Приёмы пищи">
                    {currentRation.dietPlan.meals.map((meal, mealIndex) => (
                        <Cell
                            key={mealIndex}
                            multiline
                            subhead={`${meal.name} (${meal.calories} ккал)`}
                        >
                            <div>
                                <b>Ингредиенты:</b> {meal.ingredients || "Не указано"}
                            </div>
                            {meal.preparation && (
                                <div>
                                    <b>Способ приготовления:</b> {meal.preparation}
                                </div>
                            )}
                            {meal.photo && (
                                <Image
                                    src={meal.photo}
                                    style={{
                                        width: '100%',
                                        height: '20vh',
                                        objectFit: 'cover',
                                        marginTop: '10px',
                                        borderRadius: '8px'
                                    }}
                                />
                            )}
                        </Cell>
                    ))}
                </Section>

                <INITDivider color="transparent" thickness="10%" />

                {/* Кнопки управления */}
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
                        disabled={currentRationIndex === 0} // Блокируем, если это первый рацион
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
                        style={{
                            marginLeft: '10px',
                            marginRight: '10px',
                        }}
                    >
                        Save
                    </Button>
                    <Button
                        mode="filled"
                        size="m"
                        disabled={currentRationIndex === rationsData.length - 1} // Блокируем, если это последний рацион
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

export default RationsDays;