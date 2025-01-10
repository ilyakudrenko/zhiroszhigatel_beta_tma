import axios from "axios";

const session = {
    user: null, // This will hold the user session data
};

// Function to start the session
export const startSession = async () => {
    const telegramUser = window.Telegram.WebApp?.initDataUnsafe?.user;

    if (!telegramUser || !telegramUser.id || !telegramUser.first_name) {
        throw new Error("Unable to retrieve Telegram ID or first name.");
    }

    try {
        // Отправляем запрос на вход в систему
        const response = await axios.post(
            "https://init-railway-backend-v2-production.up.railway.app/users/login",
            {
                telegram_id: telegramUser.id, // Telegram ID
                first_name: telegramUser.first_name, // Имя из Telegram
            },
            {
                withCredentials: true,
            }
        );

        // Заполняем сессию
        session.user = {
            id: response.data.id, // ID из базы данных
            telegram_id: response.data.telegram_id, // Telegram ID из базы данных
            first_name: response.data.first_name, // Имя из базы данных
            date_registered: response.data.date_registered, // Дата регистрации
            date_last_login: response.data.date_last_login, // Последний вход
            photo_url: telegramUser.photo_url || "", // From Telegram
            last_name: telegramUser.last_name || "", // From Telegram
            is_bot: telegramUser.is_bot || false, // From Telegram
            time_started: new Date().toISOString(), // Session start time
        };

        console.log("Response data:", response.data);
        console.log("User session initialized:", session.user);
        console.log("hop hey")
    } catch (error) {
        console.error("Failed to initialize user session:", error.response?.data || error.message);
        throw error;
    }
};

// Function to get the session
export const getSession = () => {
    if (!session.user) {
        throw new Error("Session has not been initialized.");
    }
    return session.user;
};