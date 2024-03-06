import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIAuthenticated } from "../http/Api";
import { STATUS } from "../constants/static";
import { useDispatch } from "react-redux";


export const cartSlice = createSlice({
    name : 'cart',
    initialState:{
        items:[],
        status:STATUS.SUCCESS
    },
    reducers:{
        cartadd(state, action){
            state.push(action.payload)
        },
        cartUpdate(state,action){
            const {productId, qty} = action.payload
            const index = state.items.findIndex(item=>item.product._id === productId)
            if(index !== -1){
                state.items[index].quantity = qty
            }
        },
        cartDelete(state,action){
            const {productId} = action.payload 
            const index = state.items.findIndex((item)=>item.product._id == productId)
            if(index!== 1){
                state.items.splice(index,1)
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(addtoCart.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(addtoCart.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(addtoCart.fulfilled,(state,action)=>{
            state.items = action.payload
            state.status = STATUS.SUCCESS
        })
        .addCase(fetchCartItems.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchCartItems.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(fetchCartItems.fulfilled,(state,action)=>{
            state.status = STATUS.SUCCESS
            state.items = action.payload
        })
        .addCase(updateCartItems.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(updateCartItems.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(updateCartItems.fulfilled,(state)=>{
            state.status = STATUS.SUCCESS
        })
        .addCase(deleteCartItems.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(deleteCartItems.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(deleteCartItems.fulfilled,(state)=>{
            state.status = STATUS.SUCCESS
        })
    }
})

export const  showCart = (state) => (state.cart.items)
export const cartStatus = (state) => (state.cart.status)
export const {cartadd,cartdelete,cartUpdate,cartDelete} = cartSlice.actions
export default cartSlice.reducer

export const addtoCart = createAsyncThunk('add/cartitem',async(id)=>{
    const response = await APIAuthenticated.post(`user/cart/${id}`)
    const data = response.data.data
    return data
})

export const fetchCartItems = createAsyncThunk('fetch/cartItems',async()=>{
    const response =await APIAuthenticated.get('/user/cart')
    const data = response.data.data 
    return data
})

export const updateCartItems = createAsyncThunk('cart/update',async({productId,qty},{dispatch})=>{
    dispatch(cartUpdate({productId, qty}))
    const response = await APIAuthenticated.patch(`/user/cart/${productId}`,{quantity :qty})
    return response.data.data
})

export const deleteCartItems = createAsyncThunk('delete/cartItems',async(id,{dispatch})=>{
    dispatch(cartDelete(id))
    const response = await APIAuthenticated.delete(`/user/cart/${id}`)
    return response.status
})