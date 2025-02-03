import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/user/user.slice'; 

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});



// step 1 create a store
// step 2 create reducers (are called slices)