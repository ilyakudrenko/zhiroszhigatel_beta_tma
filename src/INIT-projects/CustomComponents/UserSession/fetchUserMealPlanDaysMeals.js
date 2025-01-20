import axios from 'axios';
import fetchUserMealPlanDays from "./fetchUserMealPlanDays";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserMeals = async () => {
    try {
        // Step 1: Fetch meal plan days for the user
        const mealPlanDays = await fetchUserMealPlanDays();
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