import axios from "axios";
import useUserSession from "./session";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;

//
/**
 * Fetches the user's library of guides and formats it into a JSON array.
 * Uses JWT authentication from session storage.
 * @returns {Promise<Array>} A promise that resolves to the formatted guidesData array.
 */
const fetchUserLibrary = async () => {
    try {
        // Retrieve the user session
        const {userSession} = useUserSession();
        // const userId = userSession.id; // Get the user's database ID

        if (!userSession || !userSession.token) {
            throw new Error("User is not authenticated");
        }
        // Send a request to the backend to fetch the user's library
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/user_guides/load`,
            {
                headers:{
                    Authorization: `Bearer ${userSession.token}`,
                    "Content-Type": "application/json",
                }
            });

        // Format the response into the desired guidesData format
        const guidesData = response.data.map((guide) => ({
            guide_id_db: guide.id, // Add guide_id_db
            imageSrc: guide.image_src, // Assuming description is JSON
            title: guide.frontend_title,
            description: "",
            cardChip: guide.card_chip, // Static value
            guideKey: guide.guide_key, // You can adapt this based on your guide key logic
            numPage: guide.num_page,
        }));

        return guidesData;
    } catch (error) {
        console.error("Failed to fetch user library:", error);
        throw error;
    }
};

export default fetchUserLibrary;