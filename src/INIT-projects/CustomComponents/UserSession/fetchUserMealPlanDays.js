import axios from "axios";
import fetchUserMealPlan from "./fetchUserMealPlan";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserMealPlanDays = async () => {
    try {
        const mealPlan = await fetchUserMealPlan();

        const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_mealplans/days/${mealPlan.id}`);

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
    }catch(error){
        console.error("Failed to fetch user meal plan days", error);
        throw error;
    }
}

export default fetchUserMealPlanDays;