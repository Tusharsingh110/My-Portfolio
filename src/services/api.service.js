import axios from 'axios';
import { ROUTES } from '../constants/routes.constants';

const BASE_URL = ROUTES.BASE_URL;

export const fetchFeedbacks = async () => {
    const payload = {
        limit: 5,
        page: 1
    };

    try {
        const url = BASE_URL + ROUTES.FEEDBACK.FETCH_FEEDBACKS;

        // Check if URL is defined
        if (!url) {
            throw new Error("REACT_APP_BACKEND_URL is not defined in the environment variables.");
        }
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        throw new Error("Error fetching feedbacks.");
    }
};
