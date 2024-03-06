import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authRealStatus, clearRealStatus, resetPassword } from '../../features/authSlice'

const Resetpass = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const realStatus = useSelector(authRealStatus)
    const email = localStorage.getItem('email')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        const data = {
            email : email,
            newPassword :newPassword,
            confirmPassword : confirmPassword
        }
        dispatch(resetPassword(data))
    }
    if(realStatus==200){
        dispatch(clearRealStatus())
        localStorage.removeItem('email')
        navigate('/login')
    }


  return (
    <>
      <div className='h-screen flex flex-col justify-center items-center'>
    <div className="text-center mt-5">
    <div className="flex items-center justify-center">
    <svg fill="none" viewBox="0 0 24 24" className="w-12 h-12 text-rose-800" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>
    </div>
    <h2 className="text-2xl font-montserrat text-rose-800 tracking-tight">
         Create a new password
    </h2>
    <span className="text-sm text-emerald-400">or <a onClick={()=>navigate('/register')} className="text-yellow-400 hover:underline hover:cursor-pointer"> 
         register a new account
    </a>
    </span>
    </div>
<div className="flex justify-center my-2 mx-4 md:mx-0">
   <form onSubmit={(e)=>handleSubmit(e)} className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-wrap -mx-3 mb-6">
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-rose-800 text-xs font-bold mb-2" htmlFor='email'>New Password</label>
            <input onChange={(e)=>setNewPassword(e.target.value)} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-rose-800 rounded-lg py-3 px-3 leading-tight focus:outline-none" name='newPassword' type='password' id='newPassword'  required/>
         </div>
         <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-rose-800 text-xs font-bold mb-2" htmlFor='email'>Confirm your password</label>
            <input onChange={(e)=>setConfirmPassword(e.target.value)} className="appearance-none block w-full bg-white text-gray-900 font-medium border border-rose-800 rounded-lg py-3 px-3 leading-tight focus:outline-none" name='confirmPassword' type='password' id='confirmPassword'  required/>
         </div>
         <div className="w-full md:w-full px-3 mb-6">
            <button  className="appearance-none block w-full bg-yellow-400 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-rose-800 focus:outline-none focus:bg-white focus:border-gray-500">Submit</button>
         </div>
      </div>
   </form>
</div>
</div>
    
    </>
  )
}

export default Resetpass