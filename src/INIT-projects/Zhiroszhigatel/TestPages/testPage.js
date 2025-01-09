import React, { useState } from "react";
import {initializeUserSession} from "../../CustomComponents/UserSession/session";

const TestPage = () => {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const testConnection = async () => {
        try {
            const telegramUser = {
                id: "123456", // Telegram ID
                first_name: "John", // First name from Telegram
            };

            const response = await initializeUserSession(telegramUser);
            setStatus(response);
            setError(null);
        } catch (err) {
            setError(err.message);
            setStatus(null);
        }
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Database Connection Test</h1>
            <button
                onClick={testConnection}
                style={{ padding: "10px 20px", cursor: "pointer" }}
            >
                Test Connection
            </button>
            {status && (
                <pre style={{ textAlign: "left" }}>
                    {JSON.stringify(status, null, 2)}
                </pre>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default TestPage;