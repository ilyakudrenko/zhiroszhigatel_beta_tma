import axios from "axios";
import fetchUserMealPlanJWT from "./fetchUserMealPlanJWT";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

/**
 * Fetches the daily meal plan details for a user's first available meal plan.
 *
 * @param {string} token - The JWT authentication token required to authorize the request.
 *                         This token is used to first fetch the user's meal plans before retrieving meal plan days.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of meal plan days, each containing:
 *                           - mealPlanDays_id: Unique identifier for the meal plan day.
 *                           - mealPlanDays_meal_plan_id: The ID of the associated meal plan.
 *                           - mealPlanDays_day_number: The sequence day number in the meal plan.
 *                           - mealPlanDays_total_kcal: Total calories for the day.
 *                           - mealPlanDays_total_protein: Total protein intake for the day.
 *                           - mealPlanDays_total_fat: Total fat intake for the day.
 *                           - mealPlanDays_total_carbs: Total carbohydrate intake for the day.
 *
 * @throws {Error} Throws an error if the request fails (e.g., missing token, network error, no meal plans found).
 */
const fetchUserMealPlanDaysJWT = async (token) => {
    try {
        const mealPlan = await fetchUserMealPlanJWT(token);
        console.log(mealPlan);
        console.log(mealPlan[0].mealPlan_id)
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_mealplans/days/${mealPlan[0].mealPlan_id}`);

        const mealPlanDaysData = response.data.map((mealPlanDays) => ({
            mealPlanDays_id: mealPlanDays.id,
            mealPlanDays_meal_plan_id: mealPlanDays.meal_plan_id,
            mealPlanDays_day_number: mealPlanDays.day_number,
            mealPlanDays_total_kcal: mealPlanDays.total_kcal,
            mealPlanDays_total_protein: mealPlanDays.total_protein,
            mealPlanDays_total_fat: mealPlanDays.total_fat,
            mealPlanDays_total_carbs: mealPlanDays.total_carbs,

        }));

        return mealPlanDaysData;
    } catch (error) {
        console.error("Failed to fetch user meal plan days", error);
        throw error;
    }
}

export default fetchUserMealPlanDaysJWT;