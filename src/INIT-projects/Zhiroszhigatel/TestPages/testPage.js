import React, { useEffect, useState } from "react";
import {getSession, startSession} from "../../CustomComponents/UserSession/session";

const TestPage = () => {
    const [sessionData, setSessionData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeSession = async () => {
            try {
                await startSession(); // Инициализация сессии
                const session = getSession(); // Получение данных сессии
                setSessionData(session); // Сохранение данных в состоянии
            } catch (err) {
                console.error("Error initializing session:", err);
                setError(err.message);
            }
        };

        initializeSession();
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Test Page: User Session</h1>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            {sessionData ? (
                <div>
                    <h3>Session Data:</h3>
                    <pre>{JSON.stringify(sessionData, null, 2)}</pre>
                </div>
            ) : (
                <p>Loading session data...</p>
            )}
        </div>
    );
};

export default TestPage;