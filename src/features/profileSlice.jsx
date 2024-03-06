import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/static";
import { APIAuthenticated } from "../http/Api";

export const profileSlice = createSlice({
    name : 'profile',
    initialState : {
        data : [],
        status : STATUS.SUCCESS
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchprofile.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchprofile.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(fetchprofile.fulfilled,(state,action)=>{
            state.status = STATUS.SUCCESS
            state.data = action.payload
        })
    }
})

export default profileSlice.reducer
export const showProfile = (state)=>(state.profile.data)

export const fetchprofile = createAsyncThunk('profile/fetch',async()=>{
    const response = await APIAuthenticated.get('/user/profile')
    return response.data.data
})