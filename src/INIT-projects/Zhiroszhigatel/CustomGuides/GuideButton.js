import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const GuideButton = ({ guide_id, title }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarDescription, setSnackbarDescription] = useState("");

    useEffect(() => {
        const checkGuideStatus = async () => {
            try {
                const userSession = getSession();
                const userId = userSession.id_db;

                // Новый эндпоинт для проверки гайда
                const response = await axios.get(
                    `https://init-railway-backend-production.up.railway.app/user_guides/check/${userId}/${guide_id}`
                );

                setIsAdded(response.data.exists); // Обновляем состояние
            } catch (error) {
                console.error("Ошибка проверки гайда:", error);
            }
        };

        checkGuideStatus();
    }, [guide_id]);

    const handleButtonClick = async () => {
        if (isAdded) {
            setSnackbarDescription("Этот гайд уже добавлен в вашу библиотеку.");
            setSnackbarVisible(true);
            return;
        }

        try {
            const userSession = getSession();
            const userId = userSession.id_db;

            await axios.post("https://init-railway-backend-production.up.railway.app/user_guides", {
                user_id: userId,
                guide_id,
            });

            setIsAdded(true);
            setSnackbarDescription("Добавлен в библиотеку (вы можете найти его в профиле)");
            setSnackbarVisible(true);
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setSnackbarDescription("Этот гайд уже добавлен в вашу библиотеку.");
            } else {
                setSnackbarDescription("Ошибка добавления в библиотеку. Попробуйте ещё раз.");
            }
            setSnackbarVisible(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingBottom: "20px",
                zIndex: 1000,
            }}
        >
            <Button
                mode="filled"
                size="l"
                onClick={handleButtonClick}
                style={{
                    backgroundColor: isAdded ? "#FF6347" : "", // Красный, если добавлен
                }}
            >
                {isAdded ? "Уже добавлен" : "Добавить в библиотеку"}
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    children={title}
                    description={snackbarDescription}
                    duration={4000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1000
                    }}
                />
            )}
        </div>
    );
};

export default GuideButton;