import React, { useEffect, useState } from 'react'
import Nav from '../../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProduct, showProducts, showSingleProduct } from '../../features/productSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { showCart, cartadd, addtoCart } from '../../features/cartSlice'
import chefpic from '../../assets/images/chef.jpg'
import Footer from '../../components/Footer'
import {StarRating} from 'star-ratings-react'
import { createReview } from '../../features/reviewSlice'
import Reviews from '../../Sections/Reviews'

const SingleProduct = () => {
    const params = useParams()
    const id =params.id
    const navigate = useNavigate()
    const dispatch = useDispatch()

 useEffect(()=>{
    dispatch(fetchSingleProduct(id))
 },[])

 const data = useSelector(showSingleProduct)
 const canAdd = Boolean(data.productStatus === 'available')|| Boolean(data.productQty !== 0)

 const handleCart = (id) =>{
    if (localStorage.getItem('token')==""|| localStorage.getItem('token')==null || localStorage.getItem('token')==undefined){
        return navigate('/')
    }
    dispatch(addtoCart(id))
 } 

 const[rating, setRating] = useState(0)
 const [description, setDescription] = useState('')
 const handleReview = ()=>{
    const data = {
        rating : rating,
        message : description
    }
    dispatch(createReview({id,data}))
 }

 
//w-full  md:px-20 pt-6 relative bg-red-200 flex flex-row rounded-md px-6 py-10 max-w-2xl mx-auto
  return (
    <>
    <Nav/>
    <section>
<div className="min-w-screen  bg-white-200 flex items-center p-5 max-sm:p-1 max-sm:w-screen  lg:p-10 overflow-hidden ">
    <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center-mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                    <img src={data.productImage} className="w-full relative " alt=""/>
                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 -z-10"></div>
                </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                    <h1 className="font-bold uppercase font-montserrat text-rose-800 text-2xl mb-5">{data.productName}</h1>
                    <p className="text-sm font-montserrat text-rose-800">{data.productDescription} </p>
                </div>
                <div>
                    <div className="inline-block align-bottom mr-5">
                        <span className="text-2xl leading-none align-baseline text-yellow-400">$</span>
                        <span className="font-bold font-montserrat text-rose-800 text-2xl leading-none align-baseline">{data.productPrice}</span>
                        <span className="text-2xl leading-none align-baseline"></span>
                    </div>
                    <div className="inline-block align-bottom">
                        <button onClick={()=>handleCart(id)} className="bg-rose-800  hover:bg-yellow-400 hover:text-rose-800 text-white rounded-full px-5 py-2 font-montserrat"><i className="mdi mdi-cart -ml-2 mr-2"></i> Add to plate</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
<section>
    <Reviews/>
</section>

<section className='px-20 mx-20 flex flex-col items-center justify-center my-10 '>
    
    <h2 className='text-2xl text-rose-800 font-montserrat max-sm:w-screen max-sm:ml-20 max-sm:text-xl font-bold'>How do you like us?</h2>
    <div className='flex items-center justify-center  py-5 px-10'>
    <div className='flex flex-row'>
    <div className='flex flex-row-reverse max-lg:flex-col gap-2 shadow-lg justify-start rounded-xl px-7 py-3 my-5 items-center'>
    <div className='flex flex-col gap-2'>
        <label htmlFor='description' className='text-rose-800 font-bold font-montserrat'>Description</label>
        <textarea id='description' name='description' cols={30} rows={4} onChange={(e)=>(setDescription(e.target.value))} placeholder='What do you think about this dish?' className='border px-3 font-palanquin placeholder:font-palanquin py-3 rounded-lg border-rose-800'/>
    </div>
    <div className='flex flex-col justify-between gap-5 '>
    <StarRating rating={rating} size={30} onSetRating={setRating} maxRating={5} />
    <button type='submit'disabled={!canAdd} onClick={()=>handleReview()} className='px-2 py-2 w-[100px] rounded-full self-center text-white bg-rose-800'>Submit</button>
    </div>
    </div>
    <div className=''>
        <img src={chefpic} height={300} width={300}/>
    </div>
    </div>
    </div>
  
</section>
<Footer/>

</>
)}

export default SingleProduct