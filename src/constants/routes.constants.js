export const ROUTES = {
    BASE_URL: `${process.env.REACT_APP_API_URL}`,
    FEEDBACK: {
        FETCH_FEEDBACKS: '/feedbacks/get-feedbacks',
        SEND_FEEDBACK: '/feedbacks/send-feedback',
    },
    USER: {
        LOGIN: '/user/login',
        SIGN_UP: '/user/signup',
        GET_USER_DETAILS: '/user/get-user',
        VERIFY_USER: '/user/verify-otp',
        OTP_REQUEST: '/user/request-otp'
    }, 
    RESUME: {
        UPLOAD_RESUME: '/resume/save-resume',
        GET_RESUME_VERSIONS: '/resume/get-versions',
        GET_RESUME_WITH_VERSION: '/resume/get-resume/'
    }
}