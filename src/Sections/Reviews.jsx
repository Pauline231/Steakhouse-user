import React from 'react'
import { useSelector } from 'react-redux'
import { showProductReview } from '../features/productSlice'
import ReviewCard from '../components/ReviewCard'

const Reviews = () => {
    const reviews = useSelector(showProductReview)
    console.log(reviews)
    

  return (
    <>
    <section className='flex flex-row justify-center items-center flex-wrap px-10 py-10 gap-10'>
        {reviews.map((review)=>(
            <ReviewCard key={review._id} data={review}/>
        ))}
    

    </section>
    
    </>
  )
}

export default Reviews