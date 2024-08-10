import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    usermail: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.usermail = action.payload;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.usermail = '';
        }
    }
});

export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
