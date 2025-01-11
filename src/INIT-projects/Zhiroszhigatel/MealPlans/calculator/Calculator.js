import '@telegram-apps/telegram-ui/dist/styles.css';
import axios from 'axios';
import React, { useState } from 'react';
import {
    AppRoot,
    Button,
    Cell,
    Checkbox,
    IconContainer,
    Input,
    Section,
    Select,
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../../Hooks/BackButton";
import { Icon28Stats } from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import { useNavigate } from "react-router-dom";
import {getSession} from "../../../CustomComponents/UserSession/session";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;



const Calculator = () => {
    INITBackButton();
    const navigate = useNavigate();

    const userSession = getSession();

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

    const [mealPlan, setMealPlan] = useState(null);
    const [mealPlanError, setMealPlanError] = useState(null);

    const calculateMacros = async () => {
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

        if (weightLoss) {
            total -= 500;
        }

        const proteinGrams = Math.round((total * 0.3) / 4);
        const fatGrams = Math.round((total * 0.25) / 9);
        const carbGrams = Math.round((total * 0.45) / 4);

        setTotalCalories(Math.round(total));
        setProteins(proteinGrams);
        setFats(fatGrams);
        setCarbs(carbGrams);

        try {
            const response = await axios.get(
                `${BACKEND_PUBLIC_URL}/mealplans/get-mealplan`,
                { params: { calories: Math.round(total) } }
            );
            setMealPlan(response.data);
            setMealPlanError(null);
        } catch (error) {
            console.error('Error fetching meal plan:', error);
            setMealPlanError('Failed to fetch a meal plan. Try again later.');
        }
    };

    const saveMealPlan = async () => {
        try {

            const userId = userSession.id; // Здесь необходимо подставить ID текущего пользователя
            const mealPlanId = mealPlan?.id;

            if (!userId || !mealPlanId) {
                alert('Пользователь или план питания не определен.');
                return;
            }

            await axios.post(
                `${BACKEND_PUBLIC_URL}/user_mealplans/save-mealplan`,
                { userId, mealPlanId }
            );

            const message = response.data.message;

            // Обрабатываем ответ от сервера
            if (message === 'План питания обновлен.') {
                alert('Ваш план питания обновлен.');
            } else if (message === 'План питания успешно сохранен.') {
                alert('Ваш новый план питания сохранен.');
            } else if (message === 'План питания уже актуален.') {
                alert('Ваш текущий план питания уже актуален.');
            }

            navigate('/rations'); // Переход к следующей странице
        } catch (error) {
            console.error('Ошибка сохранения плана питания:', error);
            alert('Ошибка сохранения данных. Попробуйте снова.');
        }
    };

    return (
        <AppRoot>
            <Section header="Инструкция">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://www.youtube.com/embed/ai3kswDDvbQ"
                        title="YouTube video player"
                        //frameBorder="0"
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
                        //type="number"
                    />
                </Section>

                <Section header="Рост" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Input
                        placeholder="Укажите свой рост в см"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        //type="number"
                    />
                </Section>

                <Section header="Вес" style={{ paddingLeft: '10px',  paddingRight: '10px', paddingBottom: '10px' }}>
                    <Input
                        placeholder="Укажите свой вес в кг"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        //type="number"
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
            {/* Meal Plan Section */}
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
                {mealPlanError && <Cell style={{ color: 'red' }}>{mealPlanError}</Cell>}
                {mealPlan && <Cell>Рекомендуемый план: {mealPlan.title}</Cell>}
            </Section>

            <Button
                disabled={!mealPlan}
                mode="filled"
                size="m"
                stretched
                onClick={saveMealPlan}
                style={{
                    paddingTop: '10px',
                }}
            >
                Дальше
            </Button>
        </AppRoot>
    );
};
//fixing inputs
export default Calculator;