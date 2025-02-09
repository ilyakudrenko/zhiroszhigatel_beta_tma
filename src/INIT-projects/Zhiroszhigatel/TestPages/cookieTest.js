
import React, { useState, useEffect } from "react";
import axios from "axios";
import INITBackButton from "../../../Hooks/BackButton";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const CookieTest = () => {
    const [loginResponse, setLoginResponse] = useState(null);
    const [error, setError] = useState(null);
    INITBackButton();
    useEffect(() => {
        // Telegram WebApp typically injects the initData string.
        // For example, you can access it via:
        //    window.Telegram.WebApp.initData
        // For testing purposes (or if you're not in Telegram), you can set a fallback string.
        const initData =
            (window.Telegram &&
                window.Telegram.WebApp &&
                window.Telegram.WebApp.initData);

        // POST the initData to the backend.
        console.log(initData);
        axios
            .post(`${BACKEND_PUBLIC_URL}/auth/login`, { initData },{
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            })
            .then((response) => {
                // Save the response from the server (e.g., sessionID, user info, message)
                setLoginResponse(response.data);
                console.log("🟢 Login Response Headers:", response.headers);
                console.log("🟢 Login Response Data:", response.data);
            })
            .catch((err) => {
                // If there's an error (or validation fails), capture the error message.
                console.error("🔴 Login Error:", err.response?.data || err.message);
                setError(err.response?.data?.error || err.message);
            });
    }, []);

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>Telegram WebApp Authentication Demo</h1>
            {loginResponse ? (
                <div>
                    <h2>Login Successful</h2>
                    <p>
                        <strong>Session ID:</strong> {loginResponse.sessionID}
                    </p>
                    <p>
                        <strong>User:</strong>{" "}
                        <pre>{JSON.stringify(loginResponse.user, null, 2)}</pre>
                    </p>
                    <p>
                        <strong>Message:</strong> {loginResponse.message}
                    </p>
                </div>
            ) : error ? (
                <div style={{ color: "red" }}>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            ) : (
                <p>Loading... (sending initData to backend)</p>
            )}
        </div>
    );
}

export default CookieTest;