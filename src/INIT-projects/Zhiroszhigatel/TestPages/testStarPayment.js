import React, { useState } from "react";
import useUserSession from "../../CustomComponents/userSessionJWT/sessionJWT";
import INITBackButton from "../../../Hooks/BackButton";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const TestStarPayment = () => {
    const { userSession, loading } = useUserSession();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [error, setError] = useState(null);

    INITBackButton();

    async function initiatePayment() {
        try {
            if (!userSession || !userSession.token) {
                console.error("❌ No valid session token found.");
                setError("User is not authenticated.");
                return;
            }

            const response = await fetch(`${BACKEND_PUBLIC_URL}/payments/test-payment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userSession.token}`,
                },
                body: JSON.stringify({
                    title: "Test Course Purchase",
                    description: "Testing Telegram Stars payment",
                    payload: "test_payment_transaction_12345", // Unique identifier for the order
                    currency: "XTR", // Telegram Stars currency
                    prices: [{ label: "Test Purchase", amount: 100 }], // 1 Star (100 units)
                }),
            });

            const data = await response.json();

            if (data.success) {
                const invoiceLink = data.invoiceLink;
                openInvoice(invoiceLink);
            } else {
                console.error("Failed to create invoice:", data.error);
                setError("Failed to initiate payment. Please try again.");
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
            setError("An error occurred. Please try again.");
        }
    }

    function openInvoice(invoiceLink) {
        const tg = window.Telegram.WebApp;
        tg.openInvoice(invoiceLink, (status) => {
            if (status === "paid") {
                setPaymentStatus("✅ Payment successful! You now have access to the course.");
            } else {
                setPaymentStatus("❌ Payment failed or was canceled.");
            }
        });
    }

    if (loading) {
        return <p>Loading user session...</p>;
    }

    return (
        <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
            <h1>Test Telegram Stars Payment</h1>
            {userSession ? (
                <>
                    <p>Welcome, {userSession.first_name}!</p>
                    <button onClick={initiatePayment} style={{ padding: "10px", marginTop: "10px" }}>
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
