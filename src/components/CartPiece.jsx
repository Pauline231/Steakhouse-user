import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartUpdate, cartdelete, deleteCartItems, showCart, updateCartItems } from '../features/cartSlice'

const CartPiece = ({item}) => {
    const dispatch = useDispatch()
    console.log(item)
    const cartItems = useSelector(showCart)
    console.log(cartItems)
    const [product] = cartItems.filter((i)=> i.product._id===item.product._id)
       
    const onDeleteClicked = (item)=>{
        const id = item.product._id
        dispatch(deleteCartItems(id))
    }
    const handleQuantity = (productId, newQty)=>{
        console.log(productId)
        dispatch(updateCartItems({productId,qty:newQty}))
    }
  return (
   <>
    <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm text-rose-800">
            <div className="flex flex-col md:flex-row gap-3 justify-between">
                <div className="flex flex-row gap-6 items-center">
                    <div className="w-28 h-28">
                        <img className="w-full h-full" src={item.product.productImage}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-rose-800 font-montserrat font-semibold">{item.product.productName}</p>
                       
                    </div>
                </div>
                <div className="self-center text-center">
                        <span className="text-yellow-400 ml-2">(-10% OFF)</span>
                    <p className="text-rose-800 font-normal text-xl">${item.product.productPrice}</p>
                </div>
                <div className="self-center">
                    <button className="" onClick={()=>onDeleteClicked(item)}>
                        <svg className="" height="24px" width="24px" id="Layer_1" style={{'enablebackground':"new 0 0 512 512"}} version="1.1" viewBox="0 0 512 512"  xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g>
                            <path d="M400,113.3h-80v-20c0-16.2-13.1-29.3-29.3-29.3h-69.5C205.1,64,192,77.1,192,93.3v20h-80V128h21.1l23.6,290.7   c0,16.2,13.1,29.3,29.3,29.3h141c16.2,0,29.3-13.1,29.3-29.3L379.6,128H400V113.3z M206.6,93.3c0-8.1,6.6-14.7,14.6-14.7h69.5   c8.1,0,14.6,6.6,14.6,14.7v20h-98.7V93.3z M341.6,417.9l0,0.4v0.4c0,8.1-6.6,14.7-14.6,14.7H186c-8.1,0-14.6-6.6-14.6-14.7v-0.4   l0-0.4L147.7,128h217.2L341.6,417.9z"/>
                            <g>
                            <rect height="241" width="14" x="249" y="160"/>
                            <polygon points="320,160 305.4,160 294.7,401 309.3,401"/>
                            <polygon points="206.5,160 192,160 202.7,401 217.3,401"/>
                            </g>
                        </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex flex-row self-center gap-1">
                <button onClick={()=>handleQuantity(item.product._id,item.quantity-1)} className="w-5 h-5 self-center rounded-full border border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                    </svg>
                </button>
                <input type="text"  value={item.quantity}  readOnly='readOnly' className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"/>
                <button onClick={()=>handleQuantity(item.product._id,item.quantity+1)}  className="w-5 h-5 self-center rounded-full border border-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </button>
            </div>
        </div>
   
   </>
  )
}

export default CartPiece