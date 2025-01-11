import React, { useState } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const GuideButton = ({ guide_id, title }) => {
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarDescription, setSnackbarDescription] = useState("");

    const handleButtonClick = async () => {
        try {
            // Получаем данные пользователя из сессии
            const userSession = getSession();
            const userId = userSession.id;

            if (!userId || !guide_id) {
                setSnackbarDescription("Ошибка: отсутствуют данные пользователя или гайда.");
                setSnackbarVisible(true);
                return;
            }

            // Отправляем POST-запрос для добавления гайда в библиотеку
            await axios.post(
                "https://init-railway-backend-production.up.railway.app/guides/add-to-library",
                {
                    user_id: userId,
                    guide_id: guide_id,
                }
            );

            setSnackbarDescription("Гайд успешно добавлен в вашу библиотеку.");
            setSnackbarVisible(true);
        } catch (error) {
            console.error("Ошибка при добавлении гайда:", error);
            setSnackbarDescription("Произошла ошибка. Попробуйте еще раз.");
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
                zIndex: 1000, // Убедитесь, что кнопка видна
            }}
        >
            <Button
                mode="filled"
                size="l"
                onClick={handleButtonClick}
            >
                Добавить в библиотеку
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon />}
                    children={title}
                    description={snackbarDescription}
                    duration={4000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1500, // Убедитесь, что Snackbar виден
                    }}
                />
            )}
        </div>
    );
};

export default GuideButton;