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

    // const handleButtonClick = async () => {
    //     try {
    //         handleClickHaptic('light');
    //         const user = getSession(); // Получение текущей сессии пользователя
    //         if (!user || !user.id) {
    //             alert('Пользователь не авторизован!');
    //             return;
    //         }
    //
    //         // Добавление тренировки пользователю
    //         await addUserTraining(user.id, trainingId);
    //
    //         // setIsGreen(true); // Успешно добавлено
    //         setSnackbarVisible(true);
    //
    //         setTimeout(() => {
    //             window.location.reload(); // Reloads the current page
    //         }, 1800); // Reload after 1.5 seconds to allow Snackbar to be seen
    //
    //     } catch (error) {
    //         alert('Ошибка при добавлении тренировки. Попробуйте позже.');
    //         console.error(error);
    //     }
    // };

    const handleBuyClick = async () => {
        try {
            handleClickHaptic('light');

            // Получаем user_id из сессии (из локального хранилища или API)
            const user = getSession();
            if (!user || !user.id) {
                alert("Ошибка: пользователь не найден.");
                return;
            }

            // Получаем Telegram ID из Telegram WebApp
            const telegramId = window.Telegram.WebApp.initDataUnsafe?.user?.id;
            if (!telegramId) {
                alert("Ошибка: Не удалось получить Telegram ID. Запустите через Telegram.");
                return;
            }

            // Формируем payload с двумя ID
            const payload = {
                telegram_id: telegramId,
                user_id: user.id, // ID пользователя из базы данных
                training_id: trainingId
            };

            // Отправляем GET-запрос боту (через Telegram API) для отправки инвойса
            const response = await axios.get(`https://api.telegram.org/bot${process.env.REACT_APP_BOT_TOKEN}/sendInvoice`, {
                params: {
                    chat_id: telegramId, // Отправляем инвойс по Telegram ID
                    title: title, // Заголовок платежа
                    description: "Доступ к эксклюзивному плану тренировок", // Описание
                    payload: JSON.stringify(payload), // Теперь передаем два ID
                    provider_token: "", // Оставляем пустым (для Stars)
                    currency: "XTR", // Валюта (Telegram Stars)
                    prices: JSON.stringify([{ label: title, amount: price }]) // Цена в Stars
                }
            });

            if (response.data.ok) {
                console.log("✅ Инвойс на оплату успешно отправлен!");
            } else {
                console.error("❌ Ошибка запроса к боту:", response.data);
                alert("Ошибка при отправке инвойса!");
            }
        } catch (error) {
            console.error("❌ Ошибка при отправке запроса:", error);
            alert("Ошибка при запросе платежа, попробуйте снова.");
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
                    onClick={handleBuyClick}
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