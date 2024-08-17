import axiosInstance from './axios.service';
import { ROUTES } from '../constants/routes.constants';


export const fetchFeedbacks = async () => {
    const payload = {
        limit: 5,
        page: 1
    };
    try {
        const response = await axiosInstance.post(ROUTES.FEEDBACK.FETCH_FEEDBACKS, payload);
        return response.data;
    } catch (error) {
        console.error("Error fetching feedbacks:", error);
        throw new Error("Error fetching feedbacks.");
    }
};

export const login = async (credentials) => {
    try {
        const response = await axiosInstance.post(ROUTES.USER.LOGIN, credentials);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const signUp = async (payload) => {
    try {
        const response = await axiosInstance.post(ROUTES.USER.SIGN_UP, payload);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const sendFeedback = async (feedback) => {
    try {
        const response = await axiosInstance.post(ROUTES.FEEDBACK.SEND_FEEDBACK, {feedback:feedback});
        return response.data;
    } catch (error) {
        throw (error.response.data)
    }
}

export const getUserData = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get(ROUTES.USER.GET_USER_DETAILS, {headers:{Authorization: `Bearer ${token}`}})
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const uploadResume = async (file) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post(ROUTES.RESUME.UPLOAD_RESUME,file, {headers:{Authorization:`Bearer ${token}`}});
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const getResumeVersions = async () => {
    try {
        const response = await axiosInstance.get(ROUTES.RESUME.GET_RESUME_VERSIONS);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}

export const getResumeWithVersion = async (version) => {
    try {
        const response = await axiosInstance.get(ROUTES.RESUME.GET_RESUME_WITH_VERSION + version);
        return response.data;
    } catch (error) {
        throw (error.response.data);
    }
}