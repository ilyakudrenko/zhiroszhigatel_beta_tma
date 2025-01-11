import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const GuideButton = () => {
    const handleButtonClick = () => {
        try {
            // Получаем сессию пользователя
            const userSession = getSession();
            const userId = userSession.id; // ID пользователя из базы данных

            // Выводим ID пользователя через alert
            alert(`User ID: ${userId}`);
        } catch (error) {
            console.error("Error retrieving user session:", error);
            alert("Ошибка: Сессия пользователя не инициализирована.");
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