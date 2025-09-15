import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";



const initialState={
    isAuthernticated:false,
    isLoading :false,
    user:null
}

export const registerUser = createAsyncThunk('/auth/register',

    async(formData)=>{
        const response =await axois.post("http://localhost:5000/api/auth/register",
            formData,
            {
                withCredential:true,
            });
            return response.data;
    }
);


const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
    setUser: (state,action) => {},
},
 extraReducers:(builder)=>{
    builder.addCase(registerUser.pending, (state)=>{
        state.isLoading=true 
    })
    .addCase(registerUser.fulfilled, (state,action)=>{
        state.isLoading=false;
        state.user= action.payload ;
        state.isAuthernticated =false
    })
    .addCase(registerUser.rejected, (state,action)=>{
        state.isLoading=false;
        state.user= null;
        state.isAuthernticated =false
    });
 }
});

export const {setUer}=authSlice.actions;
export default authSlice.reducer;