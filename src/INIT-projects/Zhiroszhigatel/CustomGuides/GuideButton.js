import React, { useState, useEffect } from "react";
import { Button, Snackbar } from "@telegram-apps/telegram-ui";
import INITProfileIcon from "../../CustomComponents/Icons/ProfileIcon";
import { getSession } from "../../CustomComponents/UserSession/session";
import axios from "axios";

const GuideButton = ({ guide_id, title }) => {
    const handleButtonClick = () => {
        try {
            const userSession = getSession();
            const userId = userSession.id; // Получаем обычный id пользователя
            alert(`User ID: ${userId}, Guide ID: ${guide_id}`);
        } catch (error) {
            console.error("Ошибка при получении ID пользователя:", error);
            alert("Ошибка: Не удалось получить ID пользователя.");
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