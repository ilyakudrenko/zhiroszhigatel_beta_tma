import axios from 'axios';
import useUserSession from "./sessionJWT";

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;
// console.log(BACKEND_PUBLIC_URL);
/**
 * Fetches the user's library of guides and formats it into a JSON array.
 * Uses JWT authentication from session storage.
 * @returns {Promise<Array>} A promise that resolves to the formatted guidesData array.
 */
const fetchAllGuides = async () => {
    try {

        const {userSession} = useUserSession();
        if (!userSession || !userSession.token) {
            throw new Error("User is not authenticated");
        }
        // Fetch free guides from the backend
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/guides/all`, {
            headers:{
                Authorization: `Bearer ${userSession.token}`,
                "Content-Type": "application/json",
            }
        });

        // Format the guides into the desired structure
        const formattedGuides = response.data.map((guide) => ({
            guide_id_db: guide.id, // Add guide_id_db
            imageSrc: guide.image_src, // Assuming description is JSON
            title: guide.frontend_title,
            description: "",
            cardChip: guide.card_chip, // Static value
            guideKey: guide.guide_key, // You can adapt this based on your guide key logic
            numPage: guide.num_page,
        }));

        return formattedGuides;
    } catch (error) {
        console.error('Failed to fetch free guides:', error);
        throw error;
    }
};

// const fetchUserLibrary = async () => {
//     try{
//         const response = await axios.get(`${BACKEND_PUBLIC_URL}/guides/library`);
//     }
// }

export default fetchAllGuides;