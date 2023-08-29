import React from 'react'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Services from './Services'
import Footer from './Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>

    </div>
  )
}

export default Home
