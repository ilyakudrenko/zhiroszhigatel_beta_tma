import axios from 'axios';

const BACKEND_PUBLIC_URL = process.env.REACT_APP_BACKEND_PUBLIC_URL;
console.log(BACKEND_PUBLIC_URL);
/**
 * Fetch all free guides from the backend and format them into the desired JSON structure.
 * @returns {Promise<Array>} A promise that resolves to the formatted guides array.
 */
const fetchAllGuides = async () => {
    try {
        // Fetch free guides from the backend
        const response = await axios.get(`${BACKEND_PUBLIC_URL}/guides/all`);

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

export default fetchAllGuides;