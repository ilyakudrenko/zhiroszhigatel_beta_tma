import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;


/**
 * Fetches the user's meal plans using their JWT token for authentication.
 *
 * @param {string} token - The JWT authentication token required to authorize the request.
 *                         If missing, the request will fail with an authentication error.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of meal plans, each containing:
 *                           - mealPlan_id: The unique identifier of the meal plan.
 *                           - mealPlan_title: The title of the meal plan.
 *                           - mealPlan_description: A brief description of the meal plan.
 *
 * @throws {Error} Throws an error if the request fails (e.g., missing token, network error).
 */
const fetchUserMealPlanJWT = async (token) => {
    try {
        if (!token) {
            console.error("🚫 No token available 🚫")
        } else {
            console.log("🍔 Token passed to the mealplan fetch🍔", token)
        }

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
    } catch (error) {
        console.error("Failed to fetch user meal plan", error);
        throw error;
    }
}


export default fetchUserMealPlanJWT;

