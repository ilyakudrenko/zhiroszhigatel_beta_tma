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
        const response = await axios.post("https://init-railway-backend-v2-production.up.railway.app/users/login", {
            telegram_id: telegramUser.id, // Telegram ID
            first_name: telegramUser.first_name, // Имя из Telegram
        });

        // Заполняем сессию
        session.user = {
            id_db: response.data.id, // ID из базы данных
            telegram_id_db: response.data.telegram_id, // Telegram ID из базы данных
            first_name_db: response.data.first_name, // Имя из базы данных
            registration_date_db: response.data.registration_date, // Дата регистрации
            last_login_db: response.data.last_login, // Последний вход
            photo_url_tg: telegramUser.photo_url, // From Telegram
            last_name_tg: telegramUser.last_name || "", // From Telegram
            is_bot_tg: telegramUser.is_bot, // From Telegram
            time_started_db: new Date().toISOString(), // Session start time
        };

        console.log("User session initialized:", session.user);
    } catch (error) {
        console.error("Failed to initialize user session:", error);
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