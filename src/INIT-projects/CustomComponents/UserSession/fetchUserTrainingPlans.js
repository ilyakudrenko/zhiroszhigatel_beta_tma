import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

/**
 * Fetch the user's training plans from the backend.
 * @param {string} userId - The ID of the current user.
 * @returns {Promise<Array>} A promise that resolves to the user's training plans.
 */
export const fetchUserTrainingPlans = async (userId) => {
    try {
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/user-plans`, {
            params: { user_id: userId },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка получения тренировочных планов пользователя:', error);
        throw error;
    }
};