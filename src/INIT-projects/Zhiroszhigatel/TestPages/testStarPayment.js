import React, { useState } from "react";
import INITBackButton from "../../../Hooks/BackButton";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";

const TestStarPayment = () => {
    const { userSession, loading, logoutUser } = useUserSession();
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    INITBackButton();

    // Initialize Telegram WebApp
    const tg = window.Telegram.WebApp;

    // Function to open the payment popup
    const openPaymentPopup = async () => {
        try {
            const confirmResult = await tg.showConfirm(`Do you want to make a test purchase for 1 Telegram Star?`);

            if (confirmResult) {
                console.log("✅ User confirmed the payment.");
                await processPayment(1); // Pass 1 Star for testing
            } else {
                console.log("❌ User canceled the payment.");
            }
        } catch (error) {
            console.error("Error displaying payment popup:", error);
        }
    };

    // Function to send a test payment request
    const processPayment = async (priceInStars) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_PUBLIC_URL}/payments/test-payment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userSession.token}`, // Ensure authentication
                },
                body: JSON.stringify({
                    amount: priceInStars, // Amount in Telegram Stars
                    description: "Test Payment Transaction",
                }),
            });

            const result = await response.json();

            if (result.success) {
                console.log("✅ Payment successful!", result);
                alert("✅ Payment completed! Test transaction succeeded.");
            } else {
                console.error("❌ Payment failed:", result);
                alert("❌ Payment failed. Try again.");
            }
        } catch (error) {
            console.error("❌ Error processing payment:", error);
            alert("❌ Payment error. Please try again.");
        }
    };

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
                    <button onClick={testProtectedRoute} style={{ padding: "10px", marginTop: "10px" }}>
                        Test Protected Route
                    </button>
                    <button onClick={openPaymentPopup} style={{ padding: "10px", marginTop: "10px", marginLeft: "10px" }}>
                        Test Payment (1 Star)
                    </button>
                    <button onClick={logoutUser} style={{ padding: "10px", marginTop: "10px", marginLeft: "10px" }}>
                        Logout
                    </button>
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

export default TestStarPayment;