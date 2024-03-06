import React from 'react'
import Product from '../components/Product'
import {  useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showProducts, fetchProducts } from '../features/productSlice'

const PopularChoice = () => {
    const dispatch = useDispatch();
    const products = useSelector(showProducts)  
   
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])

  return (
    <>
   <section className='w-screen px-20 relative'>
    <p className='text-2xl text-rose-800 font-montserrat font-bold ml-5 '>Popular <span className='text-yellow-500'>Choices</span></p>
    <div className='flex flex-row flex-wrap gap-10'>
    {products.map((product)=>(
        <Product key={product._id}
                 product={product}
        />
    ))}
    </div>
    
   </section>
    </>
  )
}

export default PopularChoice