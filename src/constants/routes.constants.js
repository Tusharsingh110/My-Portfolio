export const ROUTES = {
    BASE_URL: `${process.env.REACT_APP_API_URL}`,
    FEEDBACK: {
        FETCH_FEEDBACKS: '/feedbacks/get-feedbacks',
        SEND_FEEDBACK: '/feedbacks/send-feedback',
    },
    USER: {
        LOGIN: '/user/login',
        SIGN_UP: '/user/signup'
    }
}