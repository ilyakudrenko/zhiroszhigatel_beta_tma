import React, { useState, useEffect } from "react";
import axios from "axios";
import INITBackButton from "../../../Hooks/BackButton";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const TestJWT = () => {
    const [loginResponse, setLoginResponse] = useState(null);
    const [error, setError] = useState(null);

    INITBackButton();

    useEffect(() => {
        // Retrieve initData from Telegram WebApp
        const initData =
            window.Telegram?.WebApp?.initData || "";

        console.log("🔹 initData from Telegram:", initData);

        axios.post(`${BACKEND_PUBLIC_URL}/auth/login`, { initData }, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                setLoginResponse(response.data);
                console.log("🟢 Login Response Data:", response.data);
            })
            .catch((err) => {
                console.error("🔴 Login Error:", err.response?.data || err.message);
                setError(err.response?.data?.error || err.message);
            });
    }, []);

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>JWT Authentication Test</h1>
            {loginResponse ? (
                <div>
                    <h2>Login Successful</h2>
                    <p><strong>Token:</strong> {loginResponse.token}</p>
                    <p><strong>User Data:</strong>
                        <pre>{JSON.stringify(loginResponse.user, null, 2)}</pre>
                    </p>
                    <p><strong>Message:</strong> {loginResponse.message}</p>
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
};

export default TestJWT;
