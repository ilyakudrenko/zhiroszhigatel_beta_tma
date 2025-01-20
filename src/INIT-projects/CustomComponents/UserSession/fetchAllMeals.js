import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchAllMeals = async () => {
    try {
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/meals/all`);
        return response.data;
    } catch (error) {
        console.error("Failed to fetch meals data:", error);
        throw error;
    }
};

export default fetchAllMeals;