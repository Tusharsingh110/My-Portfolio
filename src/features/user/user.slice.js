import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username:'',
    isLoggedIn: false,
    usermail: '',
    isAdmin: null,
    isVerified: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload.username;
            state.usermail = action.payload.mail;
            state.isAdmin = action.payload.isAdmin;
            state.isVerified = action.payload.isVerified
        },
        logOut: (state) => {
            state.username = '';
            state.isLoggedIn = false;
            state.usermail = '';            
            state.isAdmin = null;
            state.isVerified = null;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
