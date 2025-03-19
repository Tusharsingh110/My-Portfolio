import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userId: null,
    username: null,
    isLoggedIn: false,
    usermail: null,
    isAdmin: null,
    isVerified: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.userId = action.payload.userId;
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.usermail = action.payload.mail;
            state.isAdmin = action.payload.isAdmin;
            state.isVerified = action.payload.isVerified
        },
        logOut: (state) => {
            state.userId = null;
            state.username = null;
            state.isLoggedIn = false;
            state.usermail = null;
            state.isAdmin = null;
            state.isVerified = null;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
