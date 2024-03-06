import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../constants/static";
import { API, APIAuthenticated } from "../http/Api";
import { useNavigate } from "react-router-dom";

export const authSlice = createSlice({
    name : "auth",
    initialState:{
        data : [],
        status : STATUS.LOADING,
        token : '',
        realStatus:'',
    },
    reducers:{
        setUser(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        setToken(state, action){
            state.token = action.payload
        },
        clearRealStatus(state){
            state.realStatus =''
        },
        logOut(state){
            state.data = []
            state.token = ''
            state.status = STATUS.SUCCESS
        }
    },
    extraReducers :(builder)=>{
        builder
        .addCase((LogInUser).pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase((LogInUser).rejected,(state)=>{
            state.status = STATUS.ERROR
            alert('Login Error. Please try again')
        })
        .addCase((LogInUser).fulfilled,(state,action)=>{
            const {data, realStatus} = action.payload
            state.status = STATUS.SUCCESS
            state.token = data
            localStorage.setItem('token',data)
            state.realStatus = realStatus
        })
        .addCase(registerUsers.fulfilled,(state,action)=>{
            const {data, realStatus} = action.payload
            state.status = STATUS.SUCCESS
            state.realStatus = realStatus
        })
        .addCase(registerUsers.rejected,(state)=>{
            state.status = STATUS.ERROR
            alert('Please try again')
        })
        .addCase(registerUsers.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(Forgotpassword.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(Forgotpassword.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(Forgotpassword.fulfilled,(state,action)=>{
            const {status, email} = action.payload
            state.status = STATUS.SUCCESS
            state.realStatus = status
        })
        .addCase(verifyOtp.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(verifyOtp.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(verifyOtp.fulfilled,(state,action)=>{
            state.status = STATUS.SUCCESS
            state.realStatus = action.payload
        })
        .addCase(resetPassword.pending, (state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(resetPassword.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(resetPassword.fulfilled, (state,action)=>{
            state.status = STATUS.SUCCESS
            state.realStatus = action.payload
        })
    }  
})

export const selectUsers = (state) => state.auths.data;
export const selectStatus = (state) => state.auths.status
export const selecttoken = (state) => state.auths.token
export const authRealStatus = (state) => state.auths.realStatus
export const currentEmail = (state) => state.auth.email 
export const {setUser, setStatus, setToken,clearRealStatus, logOut} = authSlice.actions
export default authSlice.reducer

export const registerUsers = createAsyncThunk('users/register',async(newData)=>{
    const response = await API.post('/auth/register', newData)
    const data = response.data.data
    const realStatus = response.status
    return {data,realStatus}
  }
)

export const LogInUser = createAsyncThunk('users/login',async(loginData)=>{
    const response = await API.post("/auth/login",loginData)
    const data = response.data.data
    const realStatus = response.status
    return {data,realStatus}
})

export const Forgotpassword = createAsyncThunk('forgot/password',async(email)=>{
    const response = await APIAuthenticated.post('/auth/forgotpassword', {email})
    const status = response.status
    return {status, email}
})

export const verifyOtp = createAsyncThunk('verify/otp', async({otp,email})=>{
    const response = await APIAuthenticated.post('/auth/verifyotp',{otp,email})
    return response.status
})

export const resetPassword = createAsyncThunk('reset/password', async(resetdata)=>{
    const response = await APIAuthenticated.post('/auth/resetpassword', resetdata)
    return response.status
})