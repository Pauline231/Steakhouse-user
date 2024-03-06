import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../http/Api";

const STATUS = Object.freeze({
    SUCCESS : 'success',
    ERROR : 'error',
    LOADING : 'loading'
})


export const productSlice = createSlice({
    name : "products",
    initialState:{
        data:[],
        status: STATUS.SUCCESS,
        review:[],
        selectedProduct: {}
    },
    reducers:{
        setProduct(state,action){
            state.data = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    },
    extraReducers : (builder) =>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.data = action.payload 
            state.status = STATUS.SUCCESS
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
        .addCase(fetchSingleProduct.pending,(state)=>{
            state.status = STATUS.LOADING
        })
        .addCase(fetchSingleProduct.fulfilled,(state,action)=>{
            const{data,review} = action.payload
            state.status = STATUS.SUCCESS
            state.selectedProduct = data
            state.review = review
        })
        .addCase(fetchSingleProduct.rejected,(state)=>{
            state.status = STATUS.ERROR
        })
    },

})


export const showProducts = (state) => (state.product.data)
export const showProductStatus = (state) =>(state.product.status)
export const showProductReview = (state)=>(state.product.review)
export const showSingleProduct = (state) =>(state.product.selectedProduct)
export const {setProduct,setStatus} = productSlice.actions
export default productSlice.reducer

{/*export function fetchProducts(){
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try {
            const response = await axios.get("http://localhost:3000/api/products")
            dispatch(setProduct(response.data.data))
            console.log(response.data.data)
            dispatch(setStatus(STATUS.SUCCESS))
        } catch (error) {
            console.log(error)
            dispatch(setStatus(STATUS.ERROR))
        }
    }
}}*/}
export const fetchProducts = createAsyncThunk('products/fetch', async()=>{
    const response = await API.get("/products")
    const data =response.data.data
    return data
})

export const fetchSingleProduct = createAsyncThunk('singleproduct/fetch',async(id)=>{
    const response = await API.get(`/products/${id}`)
    const data = response.data.data
    const review = response.data.reviews
    return {data,review}
})