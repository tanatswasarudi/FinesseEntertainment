import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showsList : []
}

export const showSlice =createSlice({
    name: "shows",
    initialState,
    reducers : {
        setProductData : (state, action)=>{
            
            state.showsList = [...action.payload]

        }
    }
})
export const {setProductData} = showSlice.actions

export default showSlice.reducer