import React, {useState} from 'react';
import {AppRoot} from "@telegram-apps/telegram-ui";
import axios from "axios";


const TestPage = () => {
    const [connectionStatus, setConnectionStatus] = useState(null);
    const [error, setError] = useState(null);

    const testConnection = async () => {
        try {
            const response = await fetch("init-railway-backend-production.up.railway.app/users/test", {
                method: "GET",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setConnectionStatus(data.message || "Connection Successful");
            setError(null);
        } catch (err) {
            console.error('Test connection error:', err);
            setError(err.message || "Failed to connect");
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