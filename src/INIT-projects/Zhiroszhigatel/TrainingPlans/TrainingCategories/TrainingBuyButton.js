import React, { useState } from 'react';
import {AppRoot, Button, Snackbar} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getSession } from "../../../CustomComponents/UserSession/session";
import INITProfileIcon from "../../../CustomComponents/Icons/ProfileIcon";

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
            const user = getSession(); // Получение текущей сессии пользователя
            if (!user || !user.id) {
                alert('Пользователь не авторизован!');
                return;
            }

            // Добавление тренировки пользователю
            await addUserTraining(user.id, trainingId);

            // setIsGreen(true); // Успешно добавлено
            setSnackbarVisible(true);

            // Ждем обновления данных в базе
            let attempts = 0;
            let isTrainingUpdated = false;

            while (attempts < 5 && !isTrainingUpdated) {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // Ждем 1 секунду

                const updatedPlans = await fetchUserTrainingPlan();
                isTrainingUpdated = updatedPlans.some(plan => plan.trainingPlanId === trainingId);
                attempts++;
            }

            // После успешного обновления переходим на страницу навигации
            navigate("/trainingnavigation", { state: { training_id: trainingId } });

        } catch (error) {
            alert('Ошибка при добавлении тренировки. Попробуйте позже.');
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