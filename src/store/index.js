import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "store",
    initialState:{
        user: {},
        isLoading: false,
        messages: [],
    },
    reducers:{
        getUserAuth: (state, action) => {
            state.user = action.payload
            state.isLoading = action.payload
        },
        getMessages: (state, action) => {
            state.messages = action.payload
        }
    }
})

export const { getUserAuth, getMessages } = storeSlice.actions;
export default storeSlice.reducer;