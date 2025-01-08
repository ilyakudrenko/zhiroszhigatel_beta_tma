import React, {useState} from 'react';
import {AppRoot} from "@telegram-apps/telegram-ui";
import axios from "axios";


const TestPage = () => {
    const [connectionStatus, setConnectionStatus] = useState(null);
    const [error, setError] = useState(null);

    const testConnection = async () => {
        try {
            console.log("Sending request to backend...");
            const response = await axios.get(
                "https://init-railway-backend-production.up.railway.app/connection_test/test",
                { withCredentials: true } // Ensures proper CORS handling
            );
            console.log("Response received:", response);
        } catch (err) {
            setError(err.message); // Отображает ошибку, если подключение не удалось
            setConnectionStatus(null);
        }
    };
    return (
        <AppRoot>
            <div style={{padding: '20px', textAlign: 'center'}}>
                <h1>Database Connection Test</h1>
                <button onClick={testConnection} style={{padding: '10px 20px', fontSize: '16px'}}>
                    Test Connection
                </button>

                {connectionStatus && (
                    <p style={{color: 'green', marginTop: '20px'}}>
                        {connectionStatus}
                    </p>
                )}
                {error && (
                    <p style={{color: 'red', marginTop: '20px'}}>
                        Error: {error}
                    </p>
                )}
            </div>
        </AppRoot>
    )
}

export default TestPage;