import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import axios from "axios";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const GuideButton = ({ guide_id, title }) => {
    const {userSession, loading: loadingSession} = useUserSession();
    const [isAdded, setIsAdded] = useState(false); // State to track if the guide is added
    const [isSnackbarVisible, setSnackbarVisible] = useState(false); // Snackbar visibility state
    const [snackbarMessage, setSnackbarMessage] = useState("");



    useEffect(() => {
        if(loadingSession){
            console.log("UserSession loading");
            return;
        }
        if (!userSession || !userSession.token) {
            console.error("❌ User is not authenticated, cannot fetch guide status.");
            return;
        }

        const checkGuideStatus = async () => {
            try {
                // Get user session
                // const userSession = getSession();
                // const userId = userSession.id;
                // Check if the guide is already added for the user
                const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_guides/load`,
                    {
                        headers:{
                            Authorization: `Bearer ${userSession.token}`,
                            "Content-Type": "application/json",
                        }
                    });
                const userGuides = response.data;

                // Check if the current guide_id exists in the user's library
                const isGuideAdded = userGuides.some((guide) => guide.id === guide_id);
                setIsAdded(isGuideAdded);
            } catch (error) {
                console.error("❌ Error checking guide status:", error);
            }
        };

        checkGuideStatus();
    }, [guide_id, userSession, loadingSession]);

    const handleButtonClick = async () => {
        if (loadingSession || !userSession || !userSession.token) {
            console.error("❌ Cannot modify guide, user is not authenticated.");
            return;
        }

        try {
            if (isAdded) {
                console.log("📙guide_id passed📙", guide_id);
                // Remove the guide if it's already added
                await axios.delete(`${BACKEND_PUBLIC_URL}/user_guides/delete`, {
                    data: {guide_id},
                    headers:{
                        Authorization: `Bearer ${userSession.token}`,
                        "Content-Type": "application/json",
                    }
                });

                setIsAdded(false);
                setSnackbarMessage("Гайд удален из библиотеки!");
            } else {
                // Add the guide to the library
                console.log("📙guide_id passed📙", guide_id);
                await axios.post(
                    `${BACKEND_PUBLIC_URL}/user_guides/add`,
                    {guide_id},
                    {
                        headers:{
                            Authorization: `Bearer ${userSession.token}`,
                            "Content-Type": "application/json",
                        }
                    });

                setIsAdded(true);
                setSnackbarMessage("Гайд успешно добавлен в библиотеку!");
            }

            setSnackbarVisible(true);
        } catch (error) {
            console.error("Error managing guide:", error);
            setSnackbarMessage("Ошибка при управлении гайдом.");
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
                disabled={loadingSession || !userSession || !userSession.token}
                style={{
                    backgroundColor: isAdded ? "#FF6347" : "", // Red if added
                }}
            >
                {isAdded ? "Удалить из библиотеки" : "Добавить в библиотеку"}
            </Button>

            {isSnackbarVisible && (
                <Snackbar
                    before={<INITProfileIcon />}
                    children={title}
                    description={snackbarMessage}
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