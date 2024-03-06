import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { Provider, useDispatch  } from 'react-redux'
import Cart from './Pages/Cart/Cart'
import LogIn from './Pages/Auth/LogIn'
import Register from './Pages/Auth/Register'
import SingleProduct from './Pages/Product/SingleProduct'
import Checkout from './Pages/Checkout/Checkout'
import Profile from './Pages/User/Profile'
import { fetchprofile } from './features/profileSlice'
import Orders from './Pages/User/Orders'
import OrderDetails from './Pages/User/OrderDetails'
import OrderQr from './Pages/User/OrderQr'
import LogOut from './Pages/Auth/LogOut'
import Forgotpass from './Pages/Auth/Forgotpas'
import Verifyotp from './Pages/Auth/Verifyotp'
import Resetpass from './Pages/Auth/Resetpass'
import {io} from 'socket.io-client'

export const socket = io('https://steakhouse-backend.onrender.com',{
  auth :{
    token : localStorage.getItem('token') 
  }
})


const App = () => {



  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/api/cart' element={<Cart/>}/>
    <Route path='/login' element={<LogIn/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/product/:id' element={<SingleProduct/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/myprofile' element={<Profile/>}/>
    <Route path='/myorders' element={<Orders/>}/>
    <Route path="/orderdetails/:id" element={<OrderDetails/>}/>
    <Route path='/orderdetails/:id/qr' element={<OrderQr/>}/>
    <Route path='/logout' element={<LogOut/>}/>
    <Route path='/forgotpassword' element={<Forgotpass/>}/>
    <Route path='/verifyotp' element={<Verifyotp/>}/>
    <Route path='/resetpassword' element={<Resetpass/>}/>
    </Routes>
    </BrowserRouter>
    </>

  
  )
}

export default App
