import axios from 'axios';
import { getSession } from "./session";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserMealPlan = async () => {
    try {
        const userSession = await getSession();
        const userId = userSession.id;

        const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_mealplans/${userId}`);

        const mealPlansData = response.data.map((mealPlan) => ({
            mealPlan_id: mealPlan.id,
            mealPlan_title: mealPlan.title,
            mealPlan_description: mealPlan.description,
        }));

        return mealPlansData;
    } catch (error){
        console.error("Failed to fetch user meal plan", error);
        throw error;
    }
}


export default fetchUserMealPlan;

