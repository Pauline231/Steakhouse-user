import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIAuthenticated } from "../http/Api";
import { STATUS } from "../constants/static";

export const checkOutSlice = createSlice({
    name : 'checkOut',
    initialState:{
        status : STATUS.SUCCESS,
        orderhistory : [],
        orders : [],
        realStatus : ''
    },
    reducers:{
        setOrders(state, action){
            state.push(action.payload)
        },
        clearOrderRealStatus(state,action){
            state.realStatus =''
        },
        updateStatusFromSocket(state,action){
            const {status, orderId} = action.payload
            const updatedOrder = state.orderhistory.map((order)=>order._id === orderId? {...order,orderStatus : status}: order)
            state.orderhistory = updatedOrder
        }
    },
    extraReducers(builder){
        builder
        .addCase(createOrder.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(createOrder.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(createOrder.fulfilled,(state,action)=>{
            state.status = STATUS.SUCCESS
            state.realStatus = action.payload
        })
        .addCase(fetchOrders.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchOrders.rejected,(state)=>[
            state.status = STATUS.ERROR
        ])
        .addCase(fetchOrders.fulfilled,(state, action)=>{
            state.status = STATUS.SUCCESS
            state.orderhistory = action.payload
        })
    }
})

export const orderItems = (state)=>(state.checkOut.orders)
export const checkOutStatus = (state) =>(state.checkOut.status)
export const showOrderhistory = (state) =>(state.checkOut.orderhistory)
export const showRealOrderStatus = (state) =>(state.checkOut.realStatus)

export default checkOutSlice.reducer
export const {setOrders, clearOrderRealStatus,updateStatusFromSocket} = checkOutSlice.actions

export const createOrder = createAsyncThunk("order/create",async(orderDetails)=>{
    const response = await APIAuthenticated.post('/user/order',orderDetails)
    const data = response.data.data
    return response.status
})

export const fetchOrders = createAsyncThunk('myorders/fetch',async()=>{
    const response = await APIAuthenticated.get('/user/order')
    return response.data.data
})


