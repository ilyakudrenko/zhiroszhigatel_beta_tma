const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

export async function initiatePayment(userSession, setPaymentStatus, setError, title, description, price) {
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
                title: title,
                description: description,
                payload: "test_payment_transaction_12345", // Unique identifier for the order
                currency: "XTR", // Telegram Stars currency
                prices: [{ label: title, amount: price }], // 1 Star (100 units)
            }),
        });

        const data = await response.json();

        if (data.success) {
            const invoiceLink = data.invoiceLink;
            openInvoice(invoiceLink, setPaymentStatus);
        } else {
            console.error("Failed to create invoice:", data.error);
            setError("Failed to initiate payment. Please try again.");
        }
    } catch (error) {
        console.error("Error initiating payment:", error);
        setError("An error occurred. Please try again.");
    }
}

function openInvoice(invoiceLink, setPaymentStatus) {
    const tg = window.Telegram.WebApp;
    tg.openInvoice(invoiceLink, (status) => {
        console.log("📌 Invoice closed with status:", status);

        if (status === "paid") {
            setPaymentStatus("✅ Payment successful! You now have access to the course.");
            setPaymentStatus("paid");
        } else {
            setPaymentStatus("❌ Payment failed or was canceled.");
        }
    });
}
