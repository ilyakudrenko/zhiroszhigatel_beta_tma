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

            // Получаем `userId` из Telegram Mini App
            const userId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
            if (!userId) {
                alert("Ошибка: Telegram user ID не найден. Запустите через Telegram.");
                return;
            }

            const buyCommand = `/buy ${trainingId} ${price} ${title}`;

            console.log(`📩 Отправка запроса: ${buyCommand}`);

            // Отправляем команду боту через Telegram API
            const response = await axios.post(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendMessage`, {
                chat_id: userId, // ✅ Передаем chat_id
                text: buyCommand // ✅ Передаем команду для бота
            });

            if (response.data.ok) {
                console.log("✅ Запрос на оплату успешно отправлен боту!");
                setSnackbarVisible(true);
            } else {
                console.error("❌ Ошибка отправки запроса:", response.data);
                alert("Ошибка при запросе оплаты!");
            }

        } catch (error) {
            console.error("❌ Ошибка при запросе оплаты:", error);
            alert("Ошибка при запросе оплаты, попробуйте снова.");
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