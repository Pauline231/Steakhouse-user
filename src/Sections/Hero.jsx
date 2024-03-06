import React from 'react'
import Button from '../components/Button'
import { arrowdown } from '../assets/icons/index'

const Hero = () => {
  return (
    <>
    <section className="relative flex flex-col w-screen justify-center  max-container min-h-[70vh] bg-steak bg-cover bg-center max-sm:container gap-10">
      <div className='px-5 py-5 ml-20 flex-col max-sm:ml-10'>
      <h1 className='text-8xl text-yellow-500 font-montserrat max-sm:text-4xl '><b>Sizzling 
        <span className='text-rose-800'> Steak</span> <br></br>Adventure!</b></h1>
      <p className='text-2xl py-5 mt-2 text-amber-700 font-montserrat max-w-lg max-sm:text-xl'>Sink your teeth into succulent perfection! Try our mouthwatering steak today!</p>
      <Button label='Treat your eye!' iconURL={arrowdown}/>
      </div>
    
    </section>  
    </>
  )
}

export default Hero