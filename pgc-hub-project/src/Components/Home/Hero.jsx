import React from 'react'
import "./hero.css"
import wave from "../../assets/wave2.svg"
import hero from "../../assets/logo7.png"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className='hero-container'>
      <div className="bg">
      
      </div>
    <div className="main-hero-section">
      
      <div className="main-container">

      
      <div className="left wow animate__animated animate__slideInLeft">
        <div className="left-hed">
        <span id='pgc-hub'>PGC HUB</span>
<p>A Journey To Excellence</p>
<span id='era'>Explore the new age of education with us </span>
        </div>
        

<div className="hero-btn">
  <div className="hero-btns">
    <button onClick={()=>{navigate("/aboutt")}} id='f-btn'>Read More </button>
    <button onClick={()=>{navigate("/signup")}} id='s-btn'>Join Now </button>
  </div>
</div>
      </div>
      <div className="right wow animate__animated animate__slideInRight">
<img src={hero} alt="" />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
