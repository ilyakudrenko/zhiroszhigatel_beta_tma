import React, { useState } from "react";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";
import INITBackButton from "../../../Hooks/BackButton";
import { initiatePayment } from "../../CustomComponents/Payment/Starspayment"; // Import the payment function

const TestStarPayment = () => {
    const { userSession, loading } = useUserSession();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [error, setError] = useState(null);

    INITBackButton();

    const handlePayment = () => {
        initiatePayment(
            userSession,
            setPaymentStatus,
            setError,
            "Premium Training Plan", // Title
            "Access to exclusive workouts", // Description
            1 // Price in Stars
        );
    };

    if (loading) {
        return <p>Loading user session...</p>;
    }

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>Test Telegram Stars Payment</h1>
            {userSession ? (
                <>
                    <p>Welcome, {userSession.first_name}!</p>
                    <button
                        onClick={handlePayment}
                        style={{ padding: "10px", marginTop: "10px" }}
                    >
                        Test Payment (1 Star)
                    </button>
                </>
            ) : (
                <p>No active session. Please log in via Telegram.</p>
            )}
            {paymentStatus && <p style={{ color: "green" }}>{paymentStatus}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default TestStarPayment;