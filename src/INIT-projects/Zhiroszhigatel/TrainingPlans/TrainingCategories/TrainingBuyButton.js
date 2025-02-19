import React, {useEffect, useState} from 'react';
import {AppRoot, Button, Snackbar} from "@telegram-apps/telegram-ui";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import INITProfileIcon from "../../../CustomComponents/Icons/ProfileIcon";
import useUserSession from "../../../CustomComponents/userSessionJWT/sessionJWT";
import {initiatePayment} from "../../../CustomComponents/Payment/Starspayment";


const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;
const BOT_TOKEN = process.env.REACT_APP_BOT_TOKEN;

const handleClickHaptic = (effect = 'light') => {
    window.Telegram.WebApp.HapticFeedback.impactOccurred(effect);
};

const INITTrainingBuyButton = ({title, trainingId, price}) => {
    const navigate = useNavigate();
    const {userSession, loading: sessionLoading} = useUserSession();
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [error, setError] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);


    const successfulPayment = async () => {
        try {


            if (sessionLoading) {
                console.log("🔹Waiting for session🔹")
                return;
            }
            if (!userSession || !userSession.token) {
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
                {trainingId},
                {
                    headers: {
                        Authorization: `Bearer ${userId}`,
                        "Content-Type": "application/json",
                    }
                }
            );

            console.log("✅ Тренировка успешно добавлена");

            setSnackbarVisible(true);

            setTimeout(() => {
                window.location.reload(); // Reloads the current page
            }, 1800); // Reload after 1.5 seconds to allow Snackbar to be seen


        } catch (error) {
            console.error("❌ Ошибка при добавлении тренировки:", error);
            setError("Ошибка при добавлении тренировки. Попробуйте снова.");
        }
    };


    useEffect(() => {
        if (paymentStatus === "paid") {
            console.log("🎉 Payment successful! Running successfulPayment...");
            successfulPayment();
        }
    }, [paymentStatus]);


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
        return <AppRoot style={{color: "red"}}>{error}</AppRoot>;
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
                    onClick={handlePayment}
                >
                    Купить: {price} Stars
                </Button>
            </div>
            {error && <p style={{color: "red"}}>{error}</p>}

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon/>}
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