import React, { useEffect } from 'react'
import Hero from '../../Sections/Hero'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import PopularChoice from '../../Sections/PopularChoice'



const Home = () => {

  return (
    <>
        <main className='relative'>
          <Nav/>
    <section className='pb-10'>
        <Hero/>
    </section>
    <section className="pb-10 ">
      <PopularChoice/>
    </section>
    <section className='pt-10'>
      <Footer/>
    </section>
    </main>
    
    </>
  )
}

export default Home