import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const GuideButton = ({ guide_id, title }) => {
    const [isAdded, setIsAdded] = useState(false); // Track if the guide is already added
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarDescription, setSnackbarDescription] = useState("");

    useEffect(() => {
        const checkGuideStatus = async () => {
            try {
                // Get the user session data
                const userSession = getSession();
                const userId = userSession.id;

                // Check if the guide is already in the user's library
                const response = await axios.get(
                    `https://init-railway-backend-v2-production.up.railway.app/guides/check/${userId}/${guide_id}`
                );

                setIsAdded(response.data.exists); // Update the state based on the response
            } catch (error) {
                console.error("Failed to check guide status:", error);
            }
        };

        checkGuideStatus(); // Check status on component mount
    }, [guide_id]);

    const handleButtonClick = async () => {
        const userSession = getSession();
        const userId = userSession.id;

        console.log("Sending data:", { user_id: userId, guide_id }); // Для проверки отправляемых данных

        try {
            if (isAdded) {
                await axios.delete(
                    `https://init-railway-backend-v2-production.up.railway.app/guides/remove/${userId}/${guide_id}`
                );
                setIsAdded(false);
                setSnackbarDescription("Гайд удален из вашей библиотеки.");
            } else {
                await axios.post("https://init-railway-backend-v2-production.up.railway.app/guides/add", {
                    user_id: userId,
                    guide_id: guide_id,
                });
                setIsAdded(true);
                setSnackbarDescription("Добавлен в библиотеку (вы можете найти его в профиле)");
            }
            setSnackbarVisible(true);
        } catch (error) {
            console.error("Error managing guide in library:", error.response?.data || error.message);
            setSnackbarDescription("Ошибка. Попробуйте ещё раз.");
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
                zIndex: 1000, // Ensure it’s on top of other elements
            }}
        >
            <Button
                mode="filled"
                size="l"
                onClick={handleButtonClick}
                style={{
                    backgroundColor: isAdded ? "#FF6347" : '', // Red if added, green otherwise
                }}
            >
                {isAdded ? "Удалить из библиотеки" : "Добавить в библиотеку"}
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon />}
                    children={title}
                    description={snackbarDescription}
                    duration={4000}
                    onClose={handleCloseSnackbar}
                    style={{
                        zIndex: 1000, // Ensure it’s on top of other elements
                    }}
                />
            )}
        </div>
    );
};

export default GuideButton;