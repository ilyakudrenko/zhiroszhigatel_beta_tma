import axios from "axios";
import { getSession } from "./session"; // Adjust the path to your session.js file

/**
 * Fetches the user's library of guides and formats it into a JSON array.
 * @returns {Promise<Array>} A promise that resolves to the formatted guidesData array.
 *
 */
const fetchUserLibrary = async () => {
    try {
        // Retrieve the user session
        const userSession = getSession();
        const userId = userSession.id_db; // Get the user's database ID

        // Send a request to the backend to fetch the user's library
        const response = await axios.get(`https://init-railway-backend-production.up.railway.app/user_guides/${userId}`);

        // Format the response into the desired guidesData format
        const guidesData = response.data.map((guide) => ({
            imageSrc: guide.description.imageSrc, // Assuming `description` is stored as JSON
            title: guide.description.title,
            description: guide.description.description,
            cardChip: "Guide", // Static value
            guideKey: guide.title, // You can adapt this based on your guide key logic
            numPage: guide.description.numPage,
        }));

        return guidesData;
    } catch (error) {
        console.error("Failed to fetch user library:", error);
        throw error;
    }
};

export default fetchUserLibrary;