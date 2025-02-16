import axios from 'axios';
import {getSession} from "../UserSession/session";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserTrainingPlanWorkoutsJWT = async (token , trainingPlanId  ) => {
    // console.log("Training Id Passed:", trainingPlanId);
    try {
        // const userSession = await getSession();
        // const userId = userSession.id;
        if(!token){
            console.error("🚫Token not found. 🚫");
            return;
        }
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/get_user_workouts/${trainingPlanId}/load`,{
            headers:{
                Authorization: `Bearer ${userSession.token}`,
                "Content-Type": "application/json",
            }
        })

        const workoutsData = response.data.map((workout) => ({
            trainingPlanWorkout_id:workout.id,
            trainingPlanWorkout_training_plan_id: workout.training_plan_id,
            trainingPlanWorkout_name: workout.name,
            trainingPlanWorkout_description: workout.description,
            trainingPlanWorkout_order_num: workout.order_num,

        }));

        return workoutsData;
    } catch (error) {
        console.error("Failed to fetch user Training Plan:", error);
        throw error;
    }
}

export default fetchUserTrainingPlanWorkoutsJWT;