import {createSlice} from "@reduxjs/toolkit"



const initialState={
    isAuthernticated:false,
    isLoading :false,
    user:null
}


const authSlice =createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state,action) => {

        },
    },
})

export const {setUer}=authSlice.actions;
export default authSlice.reducer;