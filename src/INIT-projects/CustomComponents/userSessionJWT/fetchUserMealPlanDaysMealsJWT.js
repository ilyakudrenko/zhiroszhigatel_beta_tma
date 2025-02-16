import axios from 'axios';
import fetchUserMealPlanDaysJWT from "./fetchUserMealPlanDaysJWT";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

/**
 * Fetches the user's meals for all meal plan days.
 *
 * @param {string} token - The JWT authentication token required to authorize the request.
 *                         This token is used to first fetch the user's meal plan days before retrieving meals.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of meals, each containing:
 *                           - meal_id: Unique identifier for the meal.
 *                           - meal_day_id: The ID of the associated meal plan day.
 *                           - type: The type of meal (e.g., breakfast, lunch, dinner).
 *                           - composition: The ingredients or contents of the meal.
 *                           - preparation: Instructions on how to prepare the meal.
 *                           - image_src: Image URL of the meal.
 *                           - kcal: Total calorie content of the meal.
 *                           - protein: Total protein content of the meal.
 *                           - fat: Total fat content of the meal.
 *                           - carbs: Total carbohydrate content of the meal.
 *
 * @throws {Error} Throws an error if the request fails (e.g., missing token, network error, no meal plan days found).
 */
const fetchUserMeals = async (token) => {
    try {
        // Step 1: Fetch meal plan days for the user
        const mealPlanDays = await fetchUserMealPlanDaysJWT(token);
        console.log("Meal Plan Days:", mealPlanDays);

        // Step 2: Fetch meals for each day
        const mealsPromises = mealPlanDays.map(async (day) => {
            const response = await axios.get(
                `${BACKEND_PUBLIC_URL}/meals/${day.mealPlanDays_id}`
            );
            return response.data.map((meal) => ({
                meal_id: meal.id,
                meal_day_id: meal.meal_plan_day_id,
                type: meal.type,
                composition: meal.composition,
                preparation: meal.preparation,
                image_src: meal.image_src,
                kcal: meal.kcal,
                protein: meal.protein,
                fat: meal.fat,
                carbs: meal.carbs,
            }));
        });

        // Wait for all promises to resolve
        const allMeals = await Promise.all(mealsPromises);

        // Step 3: Flatten the array of meals for all days
        const mealsData = allMeals.flat();
        console.log("All Meals:", mealsData);

        return mealsData;
    } catch (error) {
        console.error("Failed to fetch user meals", error);
        throw error;
    }
};

export default fetchUserMeals;