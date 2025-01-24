import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;
/**
 * Fetch all training plans from the backend and format them into the desired JSON structure.
 * @returns {Promise<Array>} A promise that resolves to the formatted training plans array.
 */
const fetchAllTrainingPlans = async () => {
    try {
        // Fetch training plans from the backend
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/training-plans`);

        // Format the training plans into the desired structure
        const formattedTrainingPlans = response.data.map((plan) => ({
            trainingPlanId: plan.id, // Add training plan ID
            imageSrc: 'https://via.placeholder.com/254', // Placeholder for image URL (replace with actual URL if available)
            title: plan.name,
            description: plan.description,
            cardChip: 'Training', // Static value
        }));

        return formattedTrainingPlans;
    } catch (error) {
        console.error('Failed to fetch training plans:', error);
        throw error;
    }
};

export default fetchAllTrainingPlans;