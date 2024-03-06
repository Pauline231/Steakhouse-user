import React from 'react'

const Footer = () => {
  return (
    <>
    
<div className=" bg-gray-900 w-screen ">
    <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
            <h3 className="text-3xl mb-3 font-montserrat"> Download our Steak app. </h3>
            <p className='font-montserrat'> And get hold of some of our fabulous recipis. </p>
            <div className="flex justify-center my-10">
                <div className="flex items-center border w-52 rounded-lg px-4 py-2 hover:cursor-pointer mx-2 border-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-white '>Download on </p>
                        <p className="text-sm md:text-base"> Google Play Store </p>
                    </div>
                </div>
                <div className="flex items-center border w-52 rounded-lg px-4 py-2 hover:cursor-pointer mx-2 border-white">
                    <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8"/>
                    <div className="text-left ml-3">
                        <p className='text-xs text-white'>Download on </p>
                        <p className="text-sm md:text-base"> Apple Store </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Copyright, Steakhouse </p>
            <div className="order-1 md:order-2">
                <span className="px-2 hover:cursor-pointer hover:underline ">About us</span>
                <span className="px-2 hover:cursor-pointer hover:underline border-l">Contact us</span>
                <span className="px-2 hover:cursor-pointer hover:underline border-l">Privacy Policy</span>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Footer