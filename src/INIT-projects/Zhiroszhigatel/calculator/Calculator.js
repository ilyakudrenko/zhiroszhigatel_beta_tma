import '@telegram-apps/telegram-ui/dist/styles.css';
import React, { useState } from 'react';
import {
    AppRoot,
    Button,
    Cell,
    IconContainer,
    Input,
    Section,
    Select,
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../Hooks/BackButton";
import { Icon28Stats } from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../CustomComponents/Dividers/Divider";

const Calculator = () => {
    INITBackButton();

    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('Мужчина');
    const [activityLevel, setActivityLevel] = useState('Минимальная активность');

    const [totalCalories, setTotalCalories] = useState(0);
    const [proteins, setProteins] = useState(0);
    const [fats, setFats] = useState(0);
    const [carbs, setCarbs] = useState(0);

    const calculateMacros = () => {
        const numericAge = parseFloat(age) || 0;
        const numericHeight = parseFloat(height) || 0;
        const numericWeight = parseFloat(weight) || 0;

        if (numericAge <= 0 || numericHeight <= 0 || numericWeight <= 0) {
            alert("Введите корректные значения возраста, роста и веса.");
            return;
        }

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
        }[activityLevel] || 1.2;

        const total = baseCalories * activityMultiplier;

        const proteinGrams = Math.round((total * 0.3) / 4); // 30% of calories from protein
        const fatGrams = Math.round((total * 0.25) / 9); // 25% of calories from fat
        const carbGrams = Math.round((total * 0.45) / 4); // 45% of calories from carbs

        setTotalCalories(Math.round(total));
        setProteins(proteinGrams);
        setFats(fatGrams);
        setCarbs(carbGrams);
    };

    return (
        <AppRoot>
            <Section
                header="Калькулятор калорий"
                style={{
                    width: '100%',
                }}
            >
                <Section header="Возраст" style={{ padding: '7px' }}>
                    <Input
                        placeholder="Укажите свой возраст"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Рост" style={{ padding: '7px' }}>
                    <Input
                        placeholder="Укажите свой рост в см"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Вес" style={{ padding: '7px' }}>
                    <Input
                        placeholder="Укажите свой вес в кг"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Пол" style={{ padding: '7px' }}>
                    <Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </Select>
                </Section>

                <Section header="Уровень активности" style={{ padding: '7px' }}>
                    <Select
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    >
                        <option>Минимальная активность</option>
                        <option>Низкая активность</option>
                        <option>Умеренная активность</option>
                        <option>Высокая активность</option>
                        <option>Экстремальная активность</option>
                    </Select>
                </Section>

                <Button
                    mode="filled"
                    size="m"
                    stretched
                    onClick={calculateMacros}
                >
                    Рассчитать
                </Button>
            </Section>
            <INITDivider color="transparent" thickness="10%" />
            <Section header="Ваш калораж">
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Общие калории: {totalCalories} ккал
                </Cell>
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Белки: {proteins} г ({proteins * 4} ккал)
                </Cell>
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Жиры: {fats} г ({fats * 9} ккал)
                </Cell>
                <Cell before={<IconContainer><Icon28Stats /></IconContainer>}>
                    Углеводы: {carbs} г ({carbs * 4} ккал)
                </Cell>
            </Section>
        </AppRoot>
    );
};

export default Calculator;