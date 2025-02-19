import '@telegram-apps/telegram-ui/dist/styles.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
    AppRoot,
    Button,
    Cell,
    Checkbox,
    IconContainer,
    Input,
    Section,
    Select, Snackbar,
} from "@telegram-apps/telegram-ui";
import INITBackButton from "../../../../Hooks/BackButton";
import { Icon28Stats } from "@telegram-apps/telegram-ui/dist/icons/28/stats";
import INITDivider from "../../../CustomComponents/Dividers/Divider";
import {useLocation, useNavigate} from "react-router-dom";
import INITProfileIcon from "../../../CustomComponents/Icons/ProfileIcon";
import useUserSession from "../../../CustomComponents/userSessionJWT/sessionJWT";
import {initiatePayment} from "../../../CustomComponents/Payment/Starspayment";


const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const handleClickHaptic = (effect = 'light') =>{
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
}

const Calculator = () => {
    INITBackButton();
    const {userSession, loading: sessionLoading} = useUserSession();
    const navigate = useNavigate();
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const { title, price } = location.state;
    const [paymentStatus, setPaymentStatus] = useState(null);


    // const userSession = getSession();

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

        if (weightLoss && total > 1800) {
            total -= 500;
        }
        else{
            setWeightLoss(false);
        }

        if (total < 1300) {
            alert('Вы не можите выбрать курс питания ниже 1300ккал!')
            total = 1350;
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
        if(sessionLoading){
            console.log("🔹Waiting for session🔹")
            return;
        }
        if(!userSession || !userSession.token){
            console.error("❌ No valid session found, aborting fetch.");
            setError("User not authenticated");
            return;
        }
        try {

            const userId = userSession.token;
            const mealPlanId = mealPlan?.id;

            if (!userId || !mealPlanId) {
                alert('Пользователь или план питания не определен.');
                return;
            }

            await axios.post(
                `${BACKEND_PUBLIC_URL}/user_mealplans/save-mealplan`,
                { mealPlanId },
                {
                    headers:{
                        Authorization: `Bearer ${userId}`,
                        "Content-Type": "application/json",
                    }
                }
            );

            setSnackbarVisible(true);
            setTimeout(async () => {
                navigate('/'); // Переход к следующей странице
            },2000)
        } catch (error) {
            if (error.response && error.response.status === 409) {
                // Пользователь уже имеет план
                alert('У вас уже есть план питания. Нельзя добавить больше одного.');
            } else {
                // Другая ошибка
                console.error('Ошибка сохранения плана питания:', error);
                alert('Ошибка сохранения данных. Попробуйте снова.');
            }
        }
    };

    // ✅ Runs `successfulPayment()` when payment is marked as "paid"
    useEffect(() => {
        if (paymentStatus === "paid") {
            console.log("🎉 Payment successful! Running successfulPayment...");
            saveMealPlan();
        }
    }, [paymentStatus]);

    // ✅ Handles initiating payment
    const handlePayment = () => {
        handleClickHaptic('light');

        initiatePayment(
            userSession,
            (status) => {
                console.log("📌 Payment Status Changed:", status);
                setPaymentStatus(status);
            },
            setError,
            title,
            "Доступ к эксклюзивному контенту",
            price
        );
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };
    if (error) {
        return <AppRoot style={{ color: "red" }}>{error}</AppRoot>;
    }
    return (
        <AppRoot>
            <Section header="Инструкция">
                <div style={{ textAlign: "center" }}>
                    <iframe
                        width="90%"
                        height="215"
                        src="https://www.youtube.com/embed/ai3kswDDvbQ"
                        style={{
                            border: "none", // Removes the border
                            borderRadius: 16,
                            padding: 5,
                        }}
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
                {/*{mealPlanError && <Cell style={{ color: 'red' }}>{mealPlanError}</Cell>}*/}
                {mealPlan && <Cell>Рекомендуемый план: {mealPlan.title}</Cell>}
            </Section>

            <Button
                disabled={!mealPlan}
                mode="filled"
                size="m"
                stretched
                onClick={handlePayment}
                style={{
                    paddingTop: '10px',
                }}
            >
                Купить: {price} Stars
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon/>}
                    children={mealPlan.title}
                    description="Добавлен в библиотеку(вы можите найти его в профиле)"
                    duration={2000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1000, // Ensure it’s on top of other elements
                    }}
                >
                </Snackbar>
            )}

        </AppRoot>
    );
};

export default Calculator;