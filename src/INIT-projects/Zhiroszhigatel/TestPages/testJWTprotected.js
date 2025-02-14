import React, { useState } from "react";
import INITBackButton from "../../../Hooks/BackButton";
import useUserSession from "../../CustomComponents/userSessionJWT/session";

const TestJWTprotected = () => {
    const { userSession, loading, logoutUser } = useUserSession();
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    INITBackButton();

    const testProtectedRoute = async () => {
        if (!userSession?.token) {
            setError("No active session. Please log in first.");
            return;
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/protected-route`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${userSession.token}`,
                    'Content-Type': 'application/json'
                }
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Unknown error");
            }

            setResponse(data);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <p>Loading user session...</p>;
    }

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>JWT Session Test</h1>
            {userSession ? (
                <>
                    <p>Welcome, {userSession.first_name}!</p>
                    <p>Token: {userSession.token}</p>
                    <button onClick={testProtectedRoute} style={{ padding: "10px", marginTop: "10px" }}>Test Protected Route</button>
                    <button onClick={logoutUser} style={{ padding: "10px", marginTop: "10px", marginLeft: "10px" }}>Logout</button>
                </>
            ) : (
                <p>No active session. Please log in via Telegram.</p>
            )}
            {response && (
                <div>
                    <h2>Protected Route Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default TestJWTprotected;