import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './reducers/loadingSlice';
import userReducer from './reducers/userSlice';

export default configureStore({
    reducer: {
        loading: loadingReducer,
        user: userReducer,
    },
});