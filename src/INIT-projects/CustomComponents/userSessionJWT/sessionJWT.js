import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const useUserSession = () => {
    console.log("🟪 Got into the JWT page 🟪");
    const [userSession, setUserSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedSession = sessionStorage.getItem("userSession");
        if (storedSession) {
            console.log("🟪 Session stored already 🟪");
            setUserSession(JSON.parse(storedSession));
            setLoading(false);
        } else {
            console.log("🟪 New session creating 🟪");
            authenticateUser();
        }
    }, []);

    const authenticateUser = async () => {
        console.log("🟪 Authentication was called 🟪");
        try {
            const initData = window.Telegram?.WebApp?.initData || "";
            if (!initData) {
                throw new Error("initData is missing");
            }

            const response = await axios.post(`${BACKEND_PUBLIC_URL}/auth/login`, { initData }, {
                headers: { 'Content-Type': 'application/json' }
            });

            const { token, user } = response.data;
            if (token && user) {
                const sessionData = {
                    telegram_id: user.id,
                    first_name: user.first_name,
                    last_name: user.last_name || null,
                    username: user.username || null,
                    photo_url: user.photo_url || null,
                    time_started: new Date().toISOString(),
                    token
                };
                sessionStorage.setItem("userSession", JSON.stringify(sessionData));
                setUserSession(sessionData);
            }
            console.log("🟪 Authentication was successfully successfully 🟪");
        } catch (error) {
            console.error("User authentication failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const logoutUser = () => {
        sessionStorage.removeItem("userSession");
        setUserSession(null);
    };

    return { userSession, loading, logoutUser };
};

export default useUserSession;
