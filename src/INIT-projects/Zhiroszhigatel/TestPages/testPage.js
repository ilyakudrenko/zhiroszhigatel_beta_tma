import React, { useState } from "react";
import axios from "axios";

const TestPage = () => {
    const [response, setResponse] = useState(null);

    const handleTelegramLogin = async () => {
        const telegramUser = window.Telegram.WebApp?.initDataUnsafe?.user;

        if (!telegramUser || !telegramUser.id || !telegramUser.first_name) {
            console.error("Error: Unable to retrieve Telegram user data.");
            setResponse({ error: "Unable to retrieve Telegram user data." });
            return;
        }

        try {
            const res = await axios.post(
                "https://init-railway-backend-v2-production.up.railway.app/users/login",
                {
                    telegram_id: telegramUser.id, // Telegram ID
                    first_name: telegramUser.first_name, // Имя пользователя
                },
                {
                    withCredentials: true,
                }
            );
            setResponse(res.data);
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setResponse({ error: error.response?.data || error.message });
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Telegram User Login</h1>
            <button onClick={handleTelegramLogin} style={{ marginTop: "20px" }}>
                Login with Telegram
            </button>
            {response && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Response:</h3>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TestPage;