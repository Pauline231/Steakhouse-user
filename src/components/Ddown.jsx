import React from 'react'
import { navLinks } from '../constants/static'
import { useNavigate } from 'react-router-dom'

const Ddown = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className='flex absolute right-0 mt-[400px] mr-20 z-10 flex-col px-5 py-5 font-montserrat rounded-md bg-white w-[250px]'>
      <div class="py-6 flex text-rose-800 px-5 rounded-full items-center w-full hover:bg-gray-50">
                          <a onClick={()=>{navigate(`/api/cart`)}} class="flex-1">
                              <div class="text-rose-800 text-base">Plate</div>
                          </a>
                          <div>
                              <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                  <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                  <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                              </svg>
                          </div>
                      </div>

                    {navLinks.map((nav)=>(
                          <div class="py-6 flex text-rose-800 px-5 rounded-full items-center w-full hover:bg-gray-50">
                          <a onClick={()=>{navigate(`${nav.link}`)}} class="flex-1">
                              <div class="text-rose-800 text-base">{nav.label}</div>
                          </a>
                          <div>
                              <svg width="40" height="20" viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
                                  <line x1="30" y1="2" x2="40" y2="10" stroke="#9CA3AF" />
                                  <line x1="30" y1="18" x2="40" y2="10" stroke="#9CA3AF" />
                                  <line x1="20" y1="10" x2="40" y2="10" stroke="#9CA3AF" />
                              </svg>
                          </div>
                      </div>

                    ))}
                  
                  </div>    
    </>
  )
}

export default Ddown