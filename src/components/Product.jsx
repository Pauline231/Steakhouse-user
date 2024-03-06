import React from 'react'

import { useNavigate } from 'react-router-dom'


const Product = ({product}) => {
  console.log(product.productImage)
  const navigate = useNavigate()
  return (
    <>

<div onClick={()=>navigate(`/product/${product._id}`)} className="mx-auto mt-11 w-80 transform overflow-hidden hover:cursor-pointer rounded-lg bg-white shadow-md duration-300 hover:scale-105 hover:shadow-lg">
  <img className="h-48 w-full  object-cover object-center" onClick={()=>navigate(`/product/${product._id}`)} src={product.productImage} alt="Product Image" />
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium  hover:underline hover:cursor-pointer font-montserrat text-rose-800">{product.productName}</h2>
    <p className="mb-2 text-base text-rose-800 font-palanquin">{product.productDescription}</p>
    <div className="flex justify-between mt-10">
        <div className='flex flex-row items-center'>     
        <p className="mr-2 text-lg font-semibold text-rose-800">Rs.{product.productPrice}</p>
        <p className="text-base  font-medium text-yellow-400 line-through ">10% </p>
        </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Product