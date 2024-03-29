import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/static";
import { APIAuthenticated } from "../http/Api";

export const ReviewSlice = createSlice({
    name : "review",
    initialState :{
        data : [],
        status : STATUS.SUCCESS
    },
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(createReview.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(createReview.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(createReview.fulfilled,(state,action)=>{
            const id = action.payload
            state.status = STATUS.SUCCESS
            location.reload()
        })
    }
})

export default ReviewSlice.reducer

export const createReview = createAsyncThunk('create/Reviews',async({id,data})=>{
    const response = await APIAuthenticated.post(`/reviews/${id}`, data)
    return id
})
