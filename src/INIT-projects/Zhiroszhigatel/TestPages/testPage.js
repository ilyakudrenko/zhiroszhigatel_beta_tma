import React, { useState, useEffect } from "react";
import {getSession, initializeUserSession} from "../../CustomComponents/UserSession/session";

const TestPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const startSession = async () => {
            try {
                // Инициализация сессии пользователя
                await initializeUserSession();
                // Получение данных из сессии
                const userSession = getSession();
                setUserInfo(userSession); // Устанавливаем данные пользователя
            } catch (err) {
                console.error("Failed to initialize session:", err);
                setError(err.message); // Устанавливаем сообщение об ошибке
            }
        };

        startSession();
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>User Information</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {userInfo ? (
                <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "400px" }}>
                    <p><strong>ID:</strong> {userInfo.id}</p>
                    <p><strong>Telegram ID:</strong> {userInfo.telegram_id}</p>
                    <p><strong>First Name:</strong> {userInfo.first_name}</p>
                    <p><strong>Date Registered:</strong> {userInfo.date_registered}</p>
                    <p><strong>Last Login:</strong> {userInfo.date_last_login}</p>
                    <p><strong>Photo URL:</strong> {userInfo.photo_url || "N/A"}</p>
                    <p><strong>Last Name:</strong> {userInfo.last_name || "N/A"}</p>
                    <p><strong>Session Start Time:</strong> {userInfo.time_started}</p>
                </div>
            ) : (
                !error && <p>Loading user information...</p>
            )}
        </div>
    );
};

export default TestPage;