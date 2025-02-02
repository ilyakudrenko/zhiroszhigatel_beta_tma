import React, { useState } from 'react';
import {AppRoot, Button, Snackbar} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getSession } from "../../../CustomComponents/UserSession/session";
import INITProfileIcon from "../../../CustomComponents/Icons/ProfileIcon";
import fetchUserTrainingPlan from "../../../CustomComponents/UserSession/fetchUserTrainingPlan";

const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
};

const INITTrainingBuyButton = ({ title, description, trainingId, price }) => {
    const navigate = useNavigate();
    const [isGreen, setIsGreen] = useState(false);
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);


    const addUserTraining = async (userId, trainingId) => {
        const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

        try {
            const response = await axios.post(`${BACKEND_PUBLIC_URL}/trainings/add-training`, {
                user_id: userId,
                training_id: trainingId,
            });
            return response.data;
        } catch (error) {
            console.error('Ошибка добавления тренировки:', error);
            throw error;
        }
    };

    const handleButtonClick = async () => {
        try {
            handleClickHaptic('light');
            const user = getSession();
            if (!user || !user.id) {
                alert('Пользователь не авторизован!');
                return;
            }

            // Проверяем, есть ли у пользователя этот план тренировок
            const userPlans = await fetchUserTrainingPlan();
            const isAlreadyOwned = userPlans.some(plan => plan.trainingPlanId === trainingId);

            if (isAlreadyOwned) {
                alert("Этот план тренировок уже приобретен.");
                return;
            }

            // Проверяем доступность Telegram WebApp API
            console.log("📢 Checking Telegram WebApp API:", window.Telegram.WebApp);

            // Проверяем, доступен ли requestBilling
            if (window.Telegram?.WebApp?.requestBilling) {
                console.log("✅ Telegram WebApp API доступен!");

                window.Telegram.WebApp.requestBilling({
                    currency: "USD",
                    amount: price * 100, // Telegram принимает цену в центах
                    description: title,
                    payload: JSON.stringify({ user_id: user.id, training_id: trainingId }),
                    success: async () => {
                        console.log("✅ Оплата успешна!");
                        await addUserTraining(user.id, trainingId);

                        setSnackbarVisible(true);
                        setTimeout(() => {
                            window.location.reload();
                        }, 1800);
                    },
                    error: (err) => {
                        console.error("❌ Ошибка оплаты:", err);
                        alert("Оплата не удалась, попробуйте снова.");
                    }
                });

            } else {
                console.error("❌ requestBilling API не найден!");
                alert("Вы не в Telegram Mini App или API не поддерживается. Проверьте поддержку в @BotFather.");
            }

        } catch (error) {
            alert('Ошибка при обработке покупки. Попробуйте позже.');
            console.error(error);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
        <AppRoot>
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                paddingBottom: '20px',
                zIndex: 1000, // Ensure it’s on top of other elements
            }}>
                <Button
                    mode="filled"
                    size="l"
                    onClick={handleButtonClick}
                    style={{
                        backgroundColor: isGreen ? '#53E651' : '',
                    }}
                >
                    Купить: {price}
                </Button>
            </div>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon/>}
                    children={title}
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

export default INITTrainingBuyButton;