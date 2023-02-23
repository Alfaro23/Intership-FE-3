import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: "store",
    initialState:{
        user: {},
        isLoading: false,
    },
    reducers:{
        getUserAuth: (state, action) => {
            state.user = action.payload
            state.isLoading = true
        },
    }
})

export const { getUserAuth } = storeSlice.actions;
export default storeSlice.reducer;