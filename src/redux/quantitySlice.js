import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}

const quantitySlice = createSlice({
    name:'quantity',
    initialState,
    reducers:{
        increment:(state, action) => {
            state.value+=1
        },
        decrement:(state, action) => {
            state.value>1 ? state.value-=1 : 1
        }
    }
})

export const {increment, decrement} = quantitySlice.actions;
export default quantitySlice.reducer;