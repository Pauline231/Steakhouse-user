import React, { useState } from 'react'
import Nav from '../../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { showCart } from '../../features/cartSlice'
import {useForm} from 'react-hook-form'
import { clearOrderRealStatus, createOrder, orderItems, showRealOrderStatus} from '../../features/checkOutSlice'
import { useNavigate } from 'react-router-dom'


const Checkout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const items = useSelector(showCart)
    const orderRealStatus = useSelector(showRealOrderStatus)
    const {register, handleSubmit, formstate}=  useForm()
    const [paymentMethod, setPaymentMethod] = useState('COD')
    const subTotalPrice = items.reduce((amount,item)=> item.quantity * item.product.productPrice + amount, 0)
    const totalAmount = subTotalPrice+100
    const orders = useSelector(orderItems)
    const handleOrder = (data)=>{
        const orderDetails = {
            shippingAddress : data.shippingAddress,
            items : items,
            phoneNumber : data.phoneNumber,
            paymentDetails :{
                method : paymentMethod
            },
            totalAmount : totalAmount,
        }
        dispatch(createOrder(orderDetails))
        
    }
    if(orderRealStatus === 200){
        navigate('/myorders')
        dispatch(clearOrderRealStatus())
    }
    
  return (
    <>
    <Nav/>

    <div className=" min-h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-whtie  lg:flex-col flex-row space-y-8 px-12">
            <div className="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow-md rounded-md">
                <div className="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
                    <div className="text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-5 h-6 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="text-sm font-montserrat text-rose-800 font-medium ml-3">Checkout</div>
                </div>
                <div className="text-sm tracking-wide text-yellow-400 mt-4 font-palanquin sm:mt-0 sm:ml-4">Complete your shipping and payment details below.</div>
                <div className="absolute sm:relative sm:top-auto sm:right-auto ml-auto right-4 top-4 text-gray-400 hover:text-gray-800 cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
            </div>
            <div className="rounded-md">
                <form id="payment-form" method="POST" onSubmit={handleSubmit((data)=>{
                    handleOrder(data)
                })}>
                    <section>
                        <h2 className="uppercase tracking-wide text-lg font-semibold font-montserrat text-rose-800 my-2">Shipping & Billing Information</h2>
                        <fieldset className="mb-3 bg-white shadow-lg rounded font-palanquin text-rose-800">
                            <label htmlFor='name' className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Name</span>
                                <input name="name" id='name' className="focus:outline-none px-3" placeholder="Kimi no namae" required=""/>
                            </label>
                            <label  htmlFor="email" className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">Email</span>
                                <input name="email" id='email' type="email" className="focus:outline-none px-3" placeholder="try@example.com" required=""/>
                            </label>
                            <label htmlFor='phoneNumber' className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">PhoneNumber</span>
                                <input name="phoneNumber" id='phoneNumber' className="focus:outline-none px-3" placeholder="9800000023" required {...register("phoneNumber")}/>
                            </label>
                            <label htmlFor='city' className="flex border-b border-gray-200 h-12 py-3 items-center">
                                <span className="text-right px-2">City</span>
                                <input name="city" id='city' className="focus:outline-none px-3" placeholder="Kathmandu"/>
                            </label>
                            <label htmlFor='shippingAddress' className="flex border-t border-gray-200 h-12 py-3 items-center select relative">
                                <span className="text-right px-2">Address</span>
                                <input name='shippingAddress' id='shippingAddress'  className='focus:outline-none px-3' placeholder="Your address" {...register("shippingAddress")}/>
                            </label>
                        </fieldset>
                    </section>
                </form>
            </div>
            <div className="rounded-md">
                <section>
                    <h2 className="uppercase tracking-wide text-lg font-semibold font-montserrat text-rose-800 my-2">Payment Information</h2>
                    <fieldset className="mb-3 bg-white font-palanquin shadow-lg rounded text-rose-800">
                        <div className="flex border-b px-3 items-center border-gray-200 h-12 py-3">
                            <input type='radio' value='COD' checked onChange={()=>setPaymentMethod===""} className='px-10 peer-hidden' />
                            <span className='px-2 font-palanquin'>COD(Cash On Delivery)</span>
                        </div>
                    </fieldset>
                </section>
            </div>
            <button type='submit' form='payment-form' className="submit-button px-4 py-3 rounded-full bg-yellow-400 text-white hover:bg-rose-800 focus:border-none focus:bg-rose-800 focus:outline-none w-full text-xl font-semibold font-montserrat transition-colors">
                Place Your Order
            </button>
        </div>
        <div className="col-span-1 max-lg:w-screen max-lg:px-5 bg-white ">
            <h1 className="py-6 border-b-2 text-xl text-rose-800 font-montserrat px-8">Order Summary</h1>
            <ul className="py-6 border-b space-y-6 px-8">
            {items.map((item)=>(
                 <li key={item.product._id} className="grid grid-cols-6 gap-2 border-b-1">
                 <div className="col-span-1 self-center">
                     <img src={item.product.productImage} alt="Product" className="rounded w-full"/>
                 </div>
                 <div className="flex flex-col col-span-3 pt-2">
                     <span className="text-rose-800 text-md font-montserrat font-semi-bold">{item.product.productName}</span>
                 </div>
                 <div className="col-span-2 pt-3">
                     <div className="flex items-center space-x-2 text-sm justify-between">
                         <span className="text-yellow-400">{item.quantity} x Rs.{item.product.productPrice}</span>
                         <span className="text-rose-800 font-semibold inline-block">Rs.{item.product.productPrice * item.quantity}</span>
                     </div>
                 </div>
             </li>
            ))}
            </ul>
            <div className="px-8 font-palanquin border-b">
                <div className="flex justify-between py-4 text-rose-800">
                    <span>Subtotal</span>
                    <span className="font-semibold text-rose-800">Rs.{subTotalPrice}</span>
                </div>
                <div className="flex justify-between py-4 text-rose-800">
                    <span>Shipping</span>
                    <span className="font-semibold text-rose-800">Rs.100</span>
                </div>
            </div>
            <div className="font-semibold font-montserrat text-xl px-8 flex justify-between py-8 text-yellow-400">
                <span>Total</span>
                <span>Rs.{subTotalPrice+100}</span>
            </div>
        </div>
    </div>    
    </>
  )
}

export default Checkout