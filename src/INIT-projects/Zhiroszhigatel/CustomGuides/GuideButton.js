import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;


const GuideButton = ({ guide_id, title }) => {
    const handleButtonClick = async () => {
        try {
            // Получение ID пользователя из сессии
            const userSession = getSession();
            const userId = userSession.id;
            //alert(`User ID: ${userId}, Guide ID: ${guide_id}`);

            // Отправка POST-запроса для добавления записи в базу данных
            const response = await axios.post(
                `${BACKEND_PUBLIC_URL}/user-guides/add`,
                {
                    user_id: userId,
                    guide_id: guide_id,
                },
                {
                    withCredentials: true, // Для отправки cookies
                }
            );

            alert(response.data.message); // Уведомление об успешной записи
        } catch (error) {
            console.error("Error adding guide to library:", error);
            alert("Ошибка при добавлении гайда в библиотеку.");
        }
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
            >
                Добавить в библиотеку
            </Button>
        </div>
    );
};

export default GuideButton;