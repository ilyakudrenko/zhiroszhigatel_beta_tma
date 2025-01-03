import axios from 'axios';

/**
 * Fetch all free guides from the backend and format them into the desired JSON structure.
 * @returns {Promise<Array>} A promise that resolves to the formatted guides array.
 */
const fetchFreeGuides = async () => {
    try {
        // Fetch free guides from the backend
        const response = await axios.get('https://init-railway-backend-production.up.railway.app/guides/free');

        // Format the guides into the desired structure
        const formattedGuides = response.data.map((guide) => ({
            guide_id_db: guide.id, // Add guide_id_db
            imageSrc: guide.description.imageSrc, // Assuming description is JSON
            title: guide.description.title,
            description: guide.description.description,
            cardChip: "Guide", // Static value
            guideKey: guide.title, // You can adapt this based on your guide key logic
            numPage: guide.description.numPage,
        }));

        return formattedGuides;
    } catch (error) {
        console.error('Failed to fetch free guides:', error);
        throw error;
    }
};

export default fetchFreeGuides;