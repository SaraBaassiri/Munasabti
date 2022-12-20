import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
    name: 'loader',
    initialState: {
        value: false,
    },
    reducers: {
        setFalse: (state) => {
            state.value = false;
        },
        setTrue: (state) => {
            state.value = true;
        },
    },
});

export const { setFalse, setTrue } = loadingSlice.actions;

export default loadingSlice.reducer;