import { createSlice } from "@reduxjs/toolkit";


export const rootReducer = createSlice({
    name: 'rootReducer',
    initialState: {
        userState: {},
        chatState: {},
        quizState: {},
    },
    reducers: {
        quizReducer: (state = {}, { type, payload }) => state,
        chatReducer: (state = {}, { type, payload }) => state,
        userReducer: (state = {}, { type, payload }) => state,
    },
});

export const { quizReducer, chatReducer, userReducer } = rootReducer.actions;

export default rootReducer.reducer;