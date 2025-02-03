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

            if (window.Telegram && window.Telegram.WebApp) {
                console.log("✅ Telegram WebApp API доступен!");

                // Открываем платежное окно Telegram Stars
                window.Telegram.WebApp.requestBilling({
                    currency: "XTR", // Оплата звездами
                    amount: price * 100, // Количество звезд (перевод в центы)
                    description: `Покупка: ${title}`,
                    payload: JSON.stringify({ user_id: user.id, training_id: trainingId }),
                    success: async () => {
                        console.log("✅ Оплата успешна!");

                        // Отправляем подтверждение боту
                        await axios.post(`https://YOUR_BOT_API_URL/payment-success`, {
                            user_id: user.id,
                            training_id: trainingId,
                        });

                        setSnackbarVisible(true);
                    },
                    error: (err) => {
                        console.error("❌ Ошибка оплаты:", err);
                        alert("Оплата не удалась, попробуйте снова.");
                    }
                });

            } else {
                console.error("❌ Telegram WebApp API не найден!");
                alert("Вы не в Telegram Mini App! Запустите приложение в Telegram.");
            }

        } catch (error) {
            alert('Ошибка при обработке покупки. Попробуйте позже.');
            console.error(error);
        }


        // try {
        //     handleClickHaptic('light');
        //     const user = getSession(); // Получение текущей сессии пользователя
        //     if (!user || !user.id) {
        //         alert('Пользователь не авторизован!');
        //         return;
        //     }
        //
        //     // Добавление тренировки пользователю
        //     await addUserTraining(user.id, trainingId);
        //
        //     // setIsGreen(true); // Успешно добавлено
        //     setSnackbarVisible(true);
        //
        //     setTimeout(() => {
        //         window.location.reload(); // Reloads the current page
        //     }, 1800); // Reload after 1.5 seconds to allow Snackbar to be seen
        //
        // } catch (error) {
        //     alert('Ошибка при добавлении тренировки. Попробуйте позже.');
        //     console.error(error);
        // }
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