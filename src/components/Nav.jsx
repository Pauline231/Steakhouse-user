import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants/static'
import { useNavigate } from 'react-router-dom'
import { hamburger } from '../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCartItems, showCart } from '../features/cartSlice'
import Ddown from './Ddown'


const Nav = () => {
  
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cartItems = useSelector(showCart)
    const cartCount = cartItems.length
    useEffect(()=>{
      dispatch(fetchCartItems())
    },[])
    const [show, setShow] = useState(false)
  return (
    <>
    <header className='w-screen sticky top-0 backdrop-blur-md  z-10 px-10 py-2 '>
    <nav className='flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-center items-center'>
        <a href='/'><button className='rounded-full overflow-hidden size-20 border-none mr-3 max-sm:size-10'><img src="https://res.cloudinary.com/dbyv6krcj/image/upload/v1709740660/syakjablusal3zpbrzjy.png" alt='LOGO' height={20} width={130}/></button></a>
        <p className='text-rose-800 font-montserrat font-bold text-4xl max-md:text-sm'>STEAKHOUSE</p>
        </div>

    <ul className='flex-1 flex flex-row justify-end items-center max-xl:hidden gap-16 font-montserrat text-rose-800'>
        <li className='flex flex-row relative hover:cursor-pointer ' >
          <a onClick={()=>navigate('/api/cart')}>
        <img src='https://res.cloudinary.com/dbyv6krcj/image/upload/v1709740617/lbnj8agd2cqiamx2qnj8.png'  width={40} height={20}/>
        <sup className='flex h-5 w-5 z-10 ml-8  absolute rounded-full items-center justify-center bg-rose-800 text-white'>{cartCount}</sup>
        </a></li>
       
        {navLinks.map((item)=>
        <li key={item.label} className='hover:cursor-pointer' ><a onClick={()=>navigate(`${item.link}`)}>{item.label}</a></li>
         )}
         
    </ul>
      {/* For hamburger */}
      
      <div>
        <button onClick={()=>setShow(!show)} className='size-10 hidden max-xl:block'><img src={hamburger}/></button>
      </div>
      {show? <Ddown/>:null}
    </nav>

    </header>
    
    </>
  )
}

export default Nav