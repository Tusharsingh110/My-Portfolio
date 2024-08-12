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
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        throw new Error("Error fetching feedbacks.");
    }
};

export const login = async (credentials) => {
    try { 
        const url = BASE_URL + ROUTES.USER.LOGIN;
        const response = await axios.post(url, credentials);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const signUp = async (payload) => {
    try { 
        const url = BASE_URL + ROUTES.USER.SIGN_UP;
        console.log(payload)
        const response = await axios.post(url, payload);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}