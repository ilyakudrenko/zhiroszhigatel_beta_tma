import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

/**
 * Fetch the basic training program for the user.
 * @param {string} userId - The ID of the user.
 * @param {string} trainingId - The ID of the training plan.
 * @returns {Promise<Object>} The training program data.
 */
const fetchBasicTrainingProgram = async (userId, trainingId) => {
    try {
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainingprogram/basic-training-program`, {
            params: { user_id: userId, training_id: trainingId },
        });
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении базового плана тренировок:', error);
        throw error;
    }
};

export default fetchBasicTrainingProgram;