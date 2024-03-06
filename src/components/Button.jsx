import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <>
    <button className='flex flex:row justify-center items-center leading-none bg-rose-800
    rounded-full gap-2 px-7 py-4 text-white font-montserrat border-coral-red'>{label}
    {iconURL &&<img src={iconURL} alt="arrow right icon" className='ml-2 bg-white  rounded-full h-5 w-5' />}</button>
    </>
  )
}

export default Button