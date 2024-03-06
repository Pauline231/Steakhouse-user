import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav'
import { useDispatch, useSelector } from 'react-redux'
import { clearRealStatus, registerUsers, selectStatus, selectUsers, setStatus} from '../../features/authSlice'


const Register = () => {
  const navigate = useNavigate()

    const user= useSelector(selectUsers)
    console.log(user)
    const status = useSelector(selectStatus)
    console.log(status)
    const realStatus = useSelector((state)=>state.auths.realStatus)
    console.log(realStatus)
    const dispatch = useDispatch()
  
    const [userData, setUserData] = useState({
      name : "",
      password : "",
      email : '',
      phoneNumber : ''
    })
   
    const handleSubmit = (e)=>{
      e.preventDefault()
      dispatch(registerUsers(userData))
    }
    if(realStatus===201){
      navigate('/login')
      dispatch(clearRealStatus())
    }
    const handleChange = (e)=>{
      const {name, value} = e.target
      setUserData({
        ...userData,
        [name] : value
      })
    }
  
  return (
    <>
    <Nav/>
    <div className=''>
    <div className=" flex flex-col items-center justify-center py-10  bg-white">
      <div className="flex flex-col  shadow-md w-[700px] px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md" >
        <div className="font-medium self-center text-xl sm:text-3xl font-montserrat text-rose-800">Join us Now </div>
        <div className="mt-4 self-center text-l font-montserrat text-rose-800">Enter your credentials to get access account </div>
        <div className="mt-10">
          <form className='' onSubmit={handleSubmit} >
            <div className="flex flex-col mb-5">
              <label htmlFor="name" className="mb-1 text-l tracking-wide font-montserrat text-rose-800">Name:</label >
                <input id="name" type="name" name="name" onChange={handleChange} className="text-sm font-palanquin placeholder-rose-800 text-rose-800 pl-10 pr-4 rounded-2xl border border-rose-800 w-full py-2 focus:outline-none focus:shadow-md" placeholder="Enter your name" required/>
            </div>
            <div className="flex flex-col mb-5">
              <label htmlFor="email" className="mb-1 text-l font-montserrat tracking-wide text-rose-800">E-Mail Address:</label >
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-rose-800">
                </div>
                <input id="email" type="email" name="email" onChange={handleChange} className="text-sm placeholder-rose-800 font-palanquin pl-10 pr-4 rounded-2xl border border-rose-800 w-full py-2 focus:outline-none focus:shadow-md" placeholder="Enter your email" required/>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="mb-1 text-l  tracking-wide font-montserrat text-rose-800">Password:</label >
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                </div>
                <input id="password" type="password" name="password" onChange={handleChange} className="text-sm font-palanquin placeholder-rose-800 pl-10 pr-4 rounded-2xl border border-rose-800 w-full py-2 focus:outline-none focus:shadow-md" placeholder="Enter your password" required/>
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="phoneNumber" className="mb-1 text-l  tracking-wide font-montserrat text-rose-800">Phone Number:</label >
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                </div>
                <input id="phoneNumber" type="number" name="phoneNumber" onChange={handleChange} className="text-sm font-palanquin placeholder-rose-800 pl-10 pr-4 rounded-2xl border border-rose-800 w-full py-2 focus:outline-none focus:shadow-md" placeholder='Phone number' required/>
              </div>
            </div>

            <div className="flex w-full">
              <button type="submit" className="flex mt-2 items-center justify-center focus:outline-none text-rose-800 text-sm sm:text-base bg-yellow-400 hover:bg-rose-800 hover:text-white rounded-2xl py-2 w-full transition duration-150 ease-in">
                <span className="mr-2  font-montserrat uppercase">Sign Up</span>
                <span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div target="_blank" className="inline-flex items-center text-rose-800 font-medium text-xs text-center">
          <span className="ml-2 font-montserrat">You have an account?
            <a onClick={()=>navigate('/login')} className="text-xs ml-2 text-yellow-400 hover:underline hover:cursor-pointer font-semibold font-montserrat">Login here</a></span>
        </div>
      </div>
      </div>
      </div>
    </>
  )}

export default Register