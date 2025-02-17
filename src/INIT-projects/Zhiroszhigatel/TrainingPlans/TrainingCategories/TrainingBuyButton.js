import React, { useState } from 'react';
import {AppRoot, Button, Snackbar} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import INITProfileIcon from "../../../CustomComponents/Icons/ProfileIcon";
import fetchUserTrainingPlanJWT from "../../../CustomComponents/userSessionJWT/fetchUserTrainingPlanJWT";
import useUserSession from "../../../CustomComponents/userSessionJWT/sessionJWT";
import fetchUserTrainingPlanWorkoutsJWT from "../../../CustomComponents/userSessionJWT/fetchUserTrainingPlanWorkoutsJWT";


const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;
const BOT_TOKEN = process.env.REACT_APP_BOT_TOKEN;

const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
};

const INITTrainingBuyButton = ({ title, trainingId, price }) => {
    const navigate = useNavigate();
    const { userSession, loading: sessionLoading } = useUserSession();
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [error, setError] = useState(null);

    const handleBuyClick = async () => {
        try {
            handleClickHaptic('light');

            if(sessionLoading){
                console.log("🔹Waiting for session🔹")
                return;
            }
            if(!userSession || !userSession.token){
                console.error("❌ No valid session found, aborting fetch.");
                setError("User not authenticated");
                return;
            }

            const userId = userSession.token;

            if (!userId || !trainingId) {
                alert('Пользователь или план тренировок не определен.');
                return;
            }

            await axios.post(
                `${BACKEND_PUBLIC_URL}/trainings/add-training`,
                { trainingId },
                {
                    headers:{
                        Authorization: `Bearer ${userId}`,
                        "Content-Type": "application/json",
                    }
                }
            );

            console.log("✅ Тренировка успешно добавлена");

            setSnackbarVisible(true);
        } catch (error) {
            console.error("❌ Ошибка при добавлении тренировки:", error);
            setError("Ошибка при добавлении тренировки. Попробуйте снова.");
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    if (error) {
        return <AppRoot style={{ color: "red" }}>{error}</AppRoot>;
    }

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
                    onClick={handleBuyClick}
                >
                    Купить: {price} Stars
                </Button>
            </div>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon />}
                    children={title}
                    description="Инвойс отправлен в Telegram"
                    duration={2000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1000,
                    }}
                />
            )}
        </AppRoot>
    );
};

export default INITTrainingBuyButton;