import React, { useState } from 'react';
import {AppRoot, Button, Snackbar} from "@telegram-apps/telegram-ui";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getSession } from "../../../CustomComponents/UserSession/session";
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

            if (sessionLoading) {
                console.log("🔹 Waiting for session data... 🔹");
                return;
            }

            if (!userSession || !userSession.token) {
                console.error("❌ No valid session found. Aborting.");
                setError("User not authenticated");
                return;
            }

            // Extract Telegram ID from session
            const telegramId = userSession.telegram_id;

            // Form payload with necessary IDs
            const payload = {
                telegram_id: telegramId,
                user_id: userSession.telegram_id,
                training_id: trainingId
            };

            // Request Telegram bot to send an invoice
            const response = await axios.get(`https://api.telegram.org/bot${BOT_TOKEN}/sendInvoice`, {
                params: {
                    chat_id: telegramId, // Now using Telegram ID from session
                    title: title,
                    description: "Доступ к эксклюзивному плану тренировок",
                    payload: JSON.stringify(payload),
                    provider_token: "", // Stars provider token
                    currency: "XTR",
                    prices: JSON.stringify([{ label: title, amount: price }])
                }
            });

            if (response.data.ok) {
                console.log("✅ Инвойс на оплату успешно отправлен!");

                // Fetch updated training plans and workouts for the user
                await fetchUserTrainingPlanJWT(userSession.token);
                await fetchUserTrainingPlanWorkoutsJWT(userSession.token, trainingId);

                setSnackbarVisible(true);
                setTimeout(() => {
                    window.location.reload();
                }, 1800);
            } else {
                console.error("❌ Ошибка запроса к боту:", response.data);
                alert("Ошибка при отправке инвойса!");
            }
        } catch (error) {
            console.error("❌ Ошибка при запросе платежа:", error);
            alert("Ошибка при запросе платежа, попробуйте снова.");
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