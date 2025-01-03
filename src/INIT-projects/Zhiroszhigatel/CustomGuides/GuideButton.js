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
                const userId = userSession.id_db;

                // Check if the guide is already in the user's library
                const response = await axios.get(
                    `https://init-railway-backend-production.up.railway.app/user_guides/check/${userId}/${guide_id}`
                );

                setIsAdded(response.data.exists); // Update the state based on the response
            } catch (error) {
                console.error("Failed to check guide status:", error);
            }
        };

        checkGuideStatus();
    }, [guide_id]);

    const handleButtonClick = async () => {
        try {
            // Get the user session data
            const userSession = getSession();
            const userId = userSession.id_db;

            // If the guide is already added, show a message and exit
            if (isAdded) {
                setSnackbarDescription("Этот гайд уже добавлен в вашу библиотеку.");
                setSnackbarVisible(true);
                return;
            }

            // Send a POST request to add the guide to the user's library
            await axios.post("https://init-railway-backend-production.up.railway.app/user_guides", {
                user_id: userId,
                guide_id: guide_id,
            });

            // Update UI state
            setIsAdded(true); // Mark the guide as added
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
                {isAdded ? "Уже добавлен" : "Добавить в библиотеку"}
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