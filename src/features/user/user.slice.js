import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name:'',
    isLoggedIn: false,
    usermail: '',
    isAdmin: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.usermail = action.payload.mail;
            state.isAdmin = action.payload.isAdmin;
        },
        logOut: (state) => {
            state.name = '';
            state.isLoggedIn = false;
            state.usermail = '';
            state.isAdmin = null;
        }
    }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
