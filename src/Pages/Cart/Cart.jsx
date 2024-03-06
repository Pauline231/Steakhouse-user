import React from 'react'
import { useSelector } from 'react-redux'
import { showCart } from '../../features/cartSlice'
import Nav from '../../components/Nav'
import CartPiece from '../../components/CartPiece'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate()
    const cartItems = useSelector(showCart)
    const totalItemsInCartCount = cartItems.reduce((total,item)=>item.quantity + total, 0)
    const totalPrice = cartItems.reduce((total,item)=> item.product.productPrice * item.quantity + total, 0)
        
  return (
    <>
    <Nav/>
<div className="flex flex-col md:flex-row w-screen h-full px-14 py-7 font-montserrat ">
    <div className="w-full flex flex-col h-fit gap-4 p-4 ">
        <p className="text-rose-800 text-3xl font-bold font-montserrat">My cart</p>
        {cartItems.map((product)=>(
            <CartPiece key={product._id} item={product}/>
        ))}
    </div>
    <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-rose-800 text-xl font-extrabold font-palanquin">Purchase Resume</p>
        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
            <div className="flex flex-row justify-between">
                <p className="text-rose-800">Subtotal ({totalItemsInCartCount})</p>
                <p className="text-end font-bold text-rose-800">Rs.{totalPrice}</p>
            </div>
            <hr className="bg-gray-200 h-0.5"/>
            <div className="flex flex-row justify-between">
                <p className="text-rose-800">Freight</p>
                <div>
                <p className="text-end text-rose-800 font-bold">Rs.100</p>
                <p className="text-yellow-500 text-sm font-normal">Arrives in an hour</p>
                </div>
            </div>
            <hr className="bg-gray-200 h-0.5"/>
            <div className="flex flex-row justify-between">
                <p className="text-rose-800">Discount Coupon</p>
                <a className="text-yellow-400 text-base underline" href="#">Add</a>
            </div>
            <hr className="bg-gray-200 h-0.5"/>
            <div className="flex flex-row justify-between">
                <p className="text-rose-800">Total</p>
                <div>
                <p className="text-end text-rose-800 font-bold">Rs.{totalPrice+100}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button onClick={()=>navigate('/checkout')} className="transition-colors text-sm bg-yellow-400 hover:bg-rose-800 p-2  rounded-xl w-full text-white text-hover shadow-md">
                        CHECKOUT
                </button>
                <button className="transition-colors text-sm bg-yellow-400 border hover:bg-rose-800 p-2 rounded-xl w-full text-white text-hover shadow-md">
                        ADD MORE PRODUCTS
                </button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Cart