import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoggedIn: false,
        data: {},
    },
    reducers: {
        setLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn;
            if (!state.isLoggedIn) {
                state.data = {};
            }
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setLoggedIn, setData } = loadingSlice.actions;

export default loadingSlice.reducer;