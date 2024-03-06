import React from 'react'
import { StarRating } from 'star-ratings-react'

const ReviewCard = (data) => {
  
   
  return (
    <>
<div className="relative flex w-96 transform overflow-hidden flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      <StarRating rating={data.data.rating} maxRating={5} size={20}/>
    </h5>
    <p className="block font-montserrat text-base font-light leading-relaxed text-inherit antialiased">
    {data.data.message}
    </p>
  </div>
  <div className="p-6  self-end pt-0">
   <p className='text-rose-800 font-montserrat '>...by @{data.data.userID.userName}</p>
   
  </div>
</div>
    </>
  )
}

export default ReviewCard