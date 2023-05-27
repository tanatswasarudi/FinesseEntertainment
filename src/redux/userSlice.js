import {createSlice} from '@reduxjs/toolkit';

const initialState = {
        username :   "",
        email : "",
        image : "",
}
 export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers  : {
        loginRedux : (state,action)=>{
            console.log(action.payload.data)
            state.email= action.payload.data.email
            state.username= action.payload.data.username
            state.image=action.payload.data.image
        },
        logoutRedux : (state,action)=>{
            state.email= "";
            state.username= "";
            state.image= "";
        }
    }
})
export const {loginRedux,logoutRedux} = userSlice.actions
export default userSlice.reducer