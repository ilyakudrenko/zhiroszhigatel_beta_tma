import axios from "axios";

const session = {
    user: null, // This will hold the user session data
};

// Function to start the session
export const startSession = async () => {
    const telegramUser = window.Telegram.WebApp?.initDataUnsafe?.user;

    if (!telegramUser || !telegramUser.username) {
        throw new Error("Unable to retrieve username from Telegram.");
    }

    try {
        // Send a login request to the backend
        const response = await axios.post("https://your-backend-url.com/users/login", {
            username: telegramUser.username,
        });

        // Populate session variables
        session.user = {
            id_db: response.data.id, // From the database
            username_db: response.data.username, // From the database
            registration_date_db: response.data.registration_date, // From the database
            last_login_db: response.data.last_login, // From the database
            photo_url_tg: telegramUser.photo_url, // From Telegram
            first_name_tg: telegramUser.first_name || "", // From Telegram
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