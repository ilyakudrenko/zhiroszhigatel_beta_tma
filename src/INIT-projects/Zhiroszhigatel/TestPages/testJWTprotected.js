import React, { useState } from "react";
import axios from "axios";
import INITBackButton from "../../../Hooks/BackButton";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const TestJWTprotected = () => {
    const [loginResponse, setLoginResponse] = useState(null);
    const [error, setError] = useState(null);
    const [token, setToken] = useState(null);

    INITBackButton();

    const handleLogin = () => {
        const initData = window.Telegram?.WebApp?.initData || "";
        console.log("🔹 initData from Telegram:", initData);

        axios.post(`${BACKEND_PUBLIC_URL}/auth/login`, { initData }, {
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                setLoginResponse(response.data);
                setToken(response.data.token);
                console.log("🟢 Login Response Data:", response.data);
            })
            .catch((err) => {
                console.error("🔴 Login Error:", err.response?.data || err.message);
                setError(err.response?.data?.error || err.message);
            });
    };

    const testProtectedRoute = () => {
        if (!token) {
            setError("No token available. Please login first.");
            return;
        }

        axios.get(`${BACKEND_PUBLIC_URL}/protected-route`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then((response) => {
                console.log("🟢 Protected Route Response:", response.data);
                setLoginResponse(response.data);
            })
            .catch((err) => {
                console.error("🔴 Protected Route Error:", err.response?.data || err.message);
                setError(err.response?.data?.error || err.message);
            });
    };

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>JWT Authentication Test</h1>
            <button onClick={handleLogin} style={{ marginRight: "10px", padding: "10px" }}>Login</button>
            <button onClick={testProtectedRoute} style={{ padding: "10px" }}>Test Protected Route</button>
            {loginResponse ? (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(loginResponse, null, 2)}</pre>
                </div>
            ) : error ? (
                <div style={{ color: "red" }}>
                    <h2>Error</h2>
                    <p>{error}</p>
                </div>
            ) : null}
        </div>
    );
};

export default TestJWTprotected;
