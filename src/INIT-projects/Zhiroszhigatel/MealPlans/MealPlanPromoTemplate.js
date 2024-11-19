import React from 'react';
import {Button, Cell, List, Section, Title,} from "@telegram-apps/telegram-ui";

const INITMealPlanPromo = () => {
    return (

        <List style={{ backgroundColor: 'var(--tgui--background)' }}>
            {/* Изображение */}
            <Image
                src="https://i.imgur.com/892vhef.jpeg" // Замените на URL изображения
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}
            />

            {/* Заголовок */}
            <Title level="1" weight="bold" style={{ margin: '16px 16px 8px' }}>
                Standard Meal Plan
            </Title>

            {/* Раздел About */}
            <Section header="ABOUT" style={{ margin: '0 16px' }}>
                <Cell multiline>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Description</span>
                    <p style={{ marginTop: '4px' }}>
                        A customized meal plan created to enhance your journey with nutritious, well-balanced meals.
                        Adaptable to any dietary needs and goals!
                    </p>
                </Cell>
                <Cell multiline>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Calories Per Day</span>
                    <p style={{ marginTop: '4px' }}>2400 Cal | 60 Protein | 140 Carbs | 40 Fat</p>
                </Cell>
                <Cell multiline>
                    <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Duration</span>
                    <p style={{ marginTop: '4px' }}>30 days</p>
                </Cell>
            </Section>

            {/* Кнопка и цена */}
            <Section style={{ margin: '16px' }}>
                <Button
                    size="l"
                    mode="filled"
                    style={{
                        backgroundColor: 'var(--tgui--accent)',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    BUY
                </Button>
                <p style={{
                    textAlign: 'center',
                    marginTop: '8px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: 'var(--tgui--text_primary)',
                }}>
                    Price: 140 $
                </p>
            </Section>
        </List>
    );
};

export default INITMealPlanPromo;