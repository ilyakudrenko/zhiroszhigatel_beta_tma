import React, { useState } from 'react';
import { AppRoot, Button, Snackbar } from "@telegram-apps/telegram-ui";
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

    const handlePayment = async () => {
        try {
            handleClickHaptic('light');
            const user = getSession();
            if (!user || !user.id) {
                alert('Пользователь не авторизован!');
                return;
            }

            // Проверяем поддержку Telegram API
            console.log("🚀 Checking Telegram WebApp API:", window.Telegram.WebApp);
            console.log("🔍 Available methods:", Object.keys(window.Telegram.WebApp));

            if (!window.Telegram.WebApp.requestBilling) {
                console.error("❌ requestBilling API не найден!");
                alert("Ваш Telegram не поддерживает оплату звездами! Обновите приложение.");
                return;
            }

            // Обновляем WebApp перед вызовом платежа
            window.Telegram.WebApp.ready();

            // Запрос платежа звездами
            window.Telegram.WebApp.requestBilling({
                currency: "XTR", // Telegram Stars
                amount: price * 100, // Сумма в центах (100 = 1 звезда)
                description: title,
                payload: `purchase_${user.id}_${trainingId}_${Date.now()}`,
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
                zIndex: 1000,
            }}>
                <Button
                    mode="filled"
                    size="l"
                    onClick={handlePayment}
                >
                    Купить за: {price} ⭐
                </Button>
            </div>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon />}
                    children={title}
                    description="Добавлен в библиотеку (вы можете найти его в профиле)"
                    duration={2000}
                    onClose={handleCloseSnackbar}
                    style={{ zIndex: 1000 }}
                />
            )}
        </AppRoot>
    );
};

export default INITTrainingBuyButton;