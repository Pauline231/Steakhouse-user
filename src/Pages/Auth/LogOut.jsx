import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../features/authSlice'

const LogOut = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(logOut())
        localStorage.removeItem('token')
        location.replace('/')
    },[])
  return (
    <>
    </>
  )
}

export default LogOut