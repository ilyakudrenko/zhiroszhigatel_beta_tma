// import axios from "axios";
//
// // Объект для хранения сессии
// const session = {
//     user: null, // Здесь будут храниться данные сессии пользователя
// };
//
// // Функция для инициализации сессии пользователя
// export const initializeUserSession = async () => {
//     const telegramUser = window.Telegram.WebApp?.initDataUnsafe?.user;
//
//     if (!telegramUser || !telegramUser.id || !telegramUser.first_name) {
//         throw new Error("Unable to retrieve necessary Telegram user data.");
//     }
//
//     try {
//         // Отправляем запрос на логин в базу данных
//         const response = await axios.post(
//             "https://init-railway-backend-v2-production.up.railway.app/users/login",
//             {
//                 telegram_id: telegramUser.id, // Telegram ID
//                 first_name: telegramUser.first_name, // Имя пользователя
//             },
//             {
//                 withCredentials: true, // Для отправки cookies
//             }
//         );
//
//         // Сохраняем данные пользователя в сессию
//         session.user = {
//             id: response.data.id, // ID из базы данных
//             telegram_id: response.data.telegram_id, // Telegram ID из базы данных
//             first_name: response.data.first_name, // Имя пользователя из базы данных
//             date_registered: response.data.date_registered, // Дата регистрации из базы данных
//             date_last_login: response.data.date_last_login, // Дата последнего входа из базы данных
//             photo_url: telegramUser.photo_url || null, // Фото из Telegram (если доступно)
//             last_name: telegramUser.last_name || null, // Фамилия из Telegram (если доступно)
//             username: telegramUser.username || null,
//             time_started: new Date().toISOString(), // Время начала сессии
//         };
//
//         console.log("User session initialized:", session.user);
//         return session.user;
//     } catch (error) {
//         console.error("Failed to initialize user session:", error);
//         throw error;
//     }
// };
//
// // Функция для получения данных текущей сессии
// export const getSession = () => {
//     if (!session.user) {
//         throw new Error("Session has not been initialized.");
//     }
//     return session.user;
// };
//
// // Функция для очистки сессии
// export const clearSession = () => {
//     session.user = null;
//     console.log("User session cleared.");
// };