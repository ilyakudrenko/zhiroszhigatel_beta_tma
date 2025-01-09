import '@telegram-apps/telegram-ui/dist/styles.css';
import React, { useState } from 'react';
import {
    AppRoot,
    Button,
    Cell, Checkbox,
    IconContainer,
    Input,
    Section,
    Select,
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../../Hooks/BackButton";
import { Icon28Stats } from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import {useNavigate} from "react-router-dom";


const Calculator = () => {
    INITBackButton();
    const navigate = useNavigate();


    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('Мужчина');
    const [activityLevel, setActivityLevel] = useState('Минимальная активность');
    const [weightLoss, setWeightLoss] = useState(false);

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

        let total = baseCalories * activityMultiplier;

        if (weightLoss){
            total =total - 500;
        }

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
            <Section header="Инструкция">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="315"
                        src="https://www.youtube.com/embed/ai3kswDDvbQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </Section>
            <Section
                header="Калькулятор калорий"
                style={{
                    width: '100%',
                }}
            >
                <Section header="Возраст" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Input
                        placeholder="Укажите свой возраст"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Рост" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Input
                        placeholder="Укажите свой рост в см"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Вес" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Input
                        placeholder="Укажите свой вес в кг"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="number"
                    />
                </Section>

                <Section header="Пол" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option>Мужчина</option>
                        <option>Женщина</option>
                    </Select>
                </Section>

                <Section header="Уровень активности" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
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
                <Cell
                    Component="label"
                    before={<Checkbox
                        name="weightLoss"
                        checked={weightLoss}
                        onChange={(e) => setWeightLoss(e.target.checked)}
                    />}
                    description="(-500ккал)"
                    multiline
                >
                    Похудеть
                </Cell>

                <Button
                    mode="filled"
                    size="m"
                    stretched
                    onClick={calculateMacros}
                    style={{
                        paddingTop: '10px',
                    }}
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
            <Button
                disabled={totalCalories === 0 || proteins === 0 || fats === 0 || carbs === 0}
                mode="filled"
                size="m"
                stretched
                onClick={() => navigate("/rations")}
                style={{
                    paddingTop: '10px',
                }}
            >
                Дальше
            </Button>
        </AppRoot>
    );
};

export default Calculator;