import axios from "axios";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

const fetchUserTrainingPlanJWT = async (token) => {
    try{
        if(!token){
            console.error("🚫Token not found. 🚫");
            return;
        }

        const response = await axios.get(`${BACKEND_PUBLIC_URL}/trainings/get_user_training`, {
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });

        const trainingPlansData = response.data.map((trainingPlan) => ({
            trainingPlanId: trainingPlan.id, // Add training plan ID
            imageSrc: trainingPlan.image_src, // Placeholder for image URL (replace with actual URL if available)
            title: trainingPlan.name,
            description: trainingPlan.description,
            price: trainingPlan.price,
            cardChip: trainingPlan.card_chip, // Card chip information
            fullDescription: JSON.parse(trainingPlan.full_description)
        }));
        return trainingPlansData;
    } catch (error) {
        console.error("Failed to fetch user Training Plan:", error);
        throw error;
    }
}

export default fetchUserTrainingPlanJWT;