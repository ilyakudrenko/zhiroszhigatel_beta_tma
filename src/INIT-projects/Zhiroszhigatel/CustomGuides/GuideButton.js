import React, { useState } from 'react';
import { Button, Snackbar } from '@telegram-apps/telegram-ui';
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session"; // Adjust path to your session.js
import axios from 'axios';

const GuideButton = ({ guide_id, title }) => {
    const [isGreen, setIsGreen] = useState(false);
    const [isSnackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarDescription, setSnackbarDescription] = useState("");

    const handleButtonClick = async () => {
        try {
            // Retrieve the session data
            const userSession = getSession();
            const userId = userSession.id_db; // Get the user ID from the session

            // Send a POST request to the backend
            await axios.post('https://init-railway-backend-production.up.railway.app/user-guides', {
                user_id: userId,
                guide_key: guide_id, // Use the provided guideKey
            });

            // Update UI state
            setIsGreen(true); // Toggle the color state
            setSnackbarDescription("Добавлен в библиотеку (вы можете найти его в профиле)");
            setSnackbarVisible(true);
        } catch (error) {
            console.error("Failed to add guide to library:", error);
            setSnackbarDescription("Ошибка добавления в библиотеку. Попробуйте ещё раз.");
            setSnackbarVisible(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarVisible(false);
    };

    return (
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
                        zIndex: 1000, // Ensure it’s on top of other elements
                    }}
                >
                </Snackbar>
            )}
        </div>
    );
};

export default GuideButton;