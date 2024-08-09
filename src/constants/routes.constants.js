export const ROUTES = {
    BASE_URL: `${process.env.REACT_APP_BACKEND_URL}`,
    FEEDBACK: {
        FETCH_FEEDBACKS: '/feedbacks/get-feedbacks',
    },
    USER: {
        LOGIN: '/user/login',
        SIGN_UP: '/user/signup'
    }
}