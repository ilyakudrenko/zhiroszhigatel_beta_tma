import React, { useState } from "react";
import axios from "axios";

const TestConnection = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const testConnection = async () => {
        try {
            const response = await axios.get(
                "https://init-railway-backend-v2-production.up.railway.app/test-db", // Замените на ваш URL
                {
                    withCredentials: true, // Добавьте, если отправляются куки (уберите, если нет)
                }
            );
            setStatus(response.data.message); // Показывает сообщение "Database is connected!"
            setError(null); // Сбрасывает ошибки
        } catch (err) {
            console.error(err);
            setError(err.message); // Показывает ошибку, если запрос провалился
            setStatus(null); // Сбрасывает успешный статус
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Database Connection Test</h1>
            <button onClick={testConnection} style={{ padding: "10px 20px", cursor: "pointer" }}>
                Test Connection
            </button>
            {status && <p style={{ color: "green" }}>Status: {status}</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
        </div>
    );
};

export default TestConnection;