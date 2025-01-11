import React, { useState } from 'react';
import axios from 'axios';
import {
    AppRoot,
    Button,
    Cell,
    Section,
    Input,
    Select,
} from "@telegram-apps/telegram-ui";

const Calculator = () => {
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('Мужчина');
    const [activityLevel, setActivityLevel] = useState('Минимальная активность');
    const [calories, setCalories] = useState(0);
    const [mealPlan, setMealPlan] = useState(null);

    const calculateCalories = async () => {
        const numericAge = parseFloat(age);
        const numericHeight = parseFloat(height);
        const numericWeight = parseFloat(weight);

        const baseCalories =
            gender === 'Мужчина'
                ? 10 * numericWeight + 6.25 * numericHeight - 5 * numericAge + 5
                : 10 * numericWeight + 6.25 * numericHeight - 5 * numericAge - 161;

        const activityMultiplier = {
            "Минимальная активность": 1.2,
            "Низкая активность": 1.375,
            "Умеренная активность": 1.55,
            "Высокая активность": 1.725,
            "Экстремальная активность": 1.9,
        }[activityLevel];

        const totalCalories = Math.round(baseCalories * activityMultiplier);
        setCalories(totalCalories);

        try {
            const response = await axios.get(
                `https://init-railway-backend-v2-production.up.railway.app/mealplans/get-mealplan`,
                { params: { calories: totalCalories } }
            );
            setMealPlan(response.data);
        } catch (error) {
            console.error('Error fetching meal plan:', error);
        }
    };

    return (
        <AppRoot>
            <Section header="Калькулятор калорий">
                <Input
                    placeholder="Ваш возраст"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                />
                <Input
                    placeholder="Ваш рост в см"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    type="number"
                />
                <Input
                    placeholder="Ваш вес в кг"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    type="number"
                />
                <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option>Мужчина</option>
                    <option>Женщина</option>
                </Select>
                <Select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
                    <option>Минимальная активность</option>
                    <option>Низкая активность</option>
                    <option>Умеренная активность</option>
                    <option>Высокая активность</option>
                    <option>Экстремальная активность</option>
                </Select>
                <Button onClick={calculateCalories}>Рассчитать</Button>
            </Section>

            {calories > 0 && (
                <Section header={`Ваш калораж: ${calories} ккал`}>
                    {mealPlan ? (
                        <Cell>Рекомендуемый план: {mealPlan.title}</Cell>
                    ) : (
                        <Cell>Ищем план...</Cell>
                    )}
                </Section>
            )}
        </AppRoot>
    );
};

export default Calculator;