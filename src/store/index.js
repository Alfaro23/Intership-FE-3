import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "store",
    initialState:{
        user: {},
        isLoading: false,
        messages: [],
        isUserReadyToStartQuiz: false,
        userReadiness: [],
        questions: [],
    },
    reducers:{
        getUserAuth: (state, action) => {
            state.user = action.payload
            state.isLoading = action.payload
        },
        getMessages: (state, action) => {
            state.messages = action.payload
        },
        getUserState: (state, action) => {
            state.isUserReadyToStartQuiz = action.payload
            state.userReadiness = action.payload
        },
        getQuestions: (state, action) => {
            state.questions = action.payload
        }
    }
})

export const { getUserAuth, getMessages, getUserState, getQuestions } = storeSlice.actions;
export default storeSlice.reducer;