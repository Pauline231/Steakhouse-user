import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchprofile, showProfile } from '../../features/profileSlice'
import Nav from '../../components/Nav'
import { useNavigate } from 'react-router-dom'
import { fetchOrders } from '../../features/checkOutSlice'

const Profile = () => {

    useEffect(()=>{
        dispatch(fetchprofile())
    })
    const profile= useSelector(showProfile)
    console.log(profile)    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(fetchOrders())
        navigate('/myorders')
    }

  return (
   <>
   <Nav/>

        <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="relative flex flex-col items-center rounded-[20px] w-[700px] max-w-[95%] mx-auto bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 text-rose-800 dark:!shadow-none p-3">
                <div className="mt-2 mb-8 w-full">
                    <h4 className="px-2 text-xl font-bold text-navy-700 font-montserrat text-rose-800">
                    General Information
                    </h4>
                    <p className="mt-2 px-2 font-montserrat text-base text-gray-600">
                    Thank you for choosing us for your dinner. Here is your details and your history with us..
                    </p>
                </div> 
                <div className="grid grid-cols-2 font-montserrat gap-4 px-2 w-full">
                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Name</p>
                    <p className="text-base font-medium text-rose-800 ">
                        {profile.userName}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-base font-medium  text-rose-800">
                        {profile.userEmail}
                    </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Phone Number</p>
                    <p className="text-base font-medium text-">
                        {profile.userPhoneNumber}
                    </p>
                    </div>

                    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Joined In</p>
                    <p className="text-base font-medium text-navy-700 text-rose-800">
                        {profile.createdAt}
                    </p>
                    </div>

                    <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">User Id</p>
                    <p className="text-base font-medium text-navy-700 text-rose-800">
                        {profile._id}
                    </p>
                    </div>

                    <div onClick={()=>handleClick()} className="flex flex-col hover:cursor-pointer justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                    <p className="text-sm text-gray-600">Order History</p>
                    <p className="text-base font-medium text-navy-700 text-rose-800">
                        My orders
                    </p>
                    </div>
                </div>
            </div>  
          
        </div>
   </>
  )
}

export default Profile