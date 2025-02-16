import axios from 'axios';
import { getSession } from "../UserSession/session";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserMealPlanJWT = async (token) => {
    try {

        const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_mealplans/mealLibrary`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

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


export default fetchUserMealPlanJWT;

