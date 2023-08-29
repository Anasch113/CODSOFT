import React from 'react'
import "./about.css"
import Footer from "../Home/Footer"
import Navbar from './Navbar'
import aboutlogo from "../../assets/aboutlogo.jpg"
import { useState } from 'react'
const About = () => {
  const [isExpand, setIsExpand] = useState(false);
  const handleTextVisibility = (e)=>{
    e.preventDefault();
    setIsExpand(!isExpand)
  }
  return (
    <>
   
    <Navbar/>
    <div className='about-container'>
      <div className="main-about-container">

      <div className="wrapper">

<div className="background-container">
    <div className="bg-1"></div>
    <div className="bg-2"></div>

</div>
<div className="about-container">
    
    <div className="image-container">
       <img src={aboutlogo} alt="" />
        
    </div>

    <div className="text-container">
        <h1>About us
        <div className="line"></div>
        </h1>

        <h5 >Welcome to PGC-Hub: Your Ultimate Student Management and Assignment Submission Platform

At PGC-Hub, we believe in the power of education and its ability to transform lives. Our mission is to simplify the lives of students and educators by providing a comprehensive online platform tailored to the unique needs of both.    

 
  
        {
          isExpand && (
            <>
            <span style={{textDecoration : "underline", fontSize: '20px',}}>         </span>

            <span style={{color: 'black', height: '100px'}}> <h5>
             PGC-Hub is a student-centric online hub, carefully designed to streamline the student data management process and make assignment submission a breeze. We understand the challenges students face in organizing their academic journey, and we're here to help.  </h5></span>
            </>
          )
        }
       </h5>
        <a onClick={handleTextVisibility} href="">  {isExpand ? 'Read Less' : 'Read More'}</a>

    </div>
    
</div>
</div>

        <div className="features-container">
        <div className="fea-heading">
           <span>
           Features
            </span> 
            <div className="line"></div>
          </div>
  <div className="features">
    <div className="head">
    <span className="head-txt">
    Efficiency & Accessibility
      </span>
    </div>
    <div className="fea-txt">
    <span className='fea-text'>
    Save time and effort with our user-friendly platform that simplifies student management and assignment submission.
      </span>
      <span className='fea-text'>
      Access your academic information and assignments anytime, anywhere, from any device.
      </span>
    </div>
  </div>
  <div className="features">
    <div className="head">
      <span className="head-txt">
      Community
      </span>

    </div>
    <div className="fea-txt">
    <span className='fea-text'>
    Join a vibrant online community of students and educators, fostering collaboration and knowledge sharing.
      </span>
    </div>
  </div>
  <div className="features">
    <div className="head">
    <span className="head-txt">
    Security & Innovation
      </span>
    </div>
    <div className="fea-txt-container">
      <span className='fea-text'>
      our data's security is our top priority. We employ state-of-the-art security measures to protect your information.
      </span>
      <span className='fea-text'>
      We are constantly evolving, incorporating the latest technology to enhance your learning experience.
      </span>

    </div>
  </div>
        </div>
       
      </div>
    </div>
   
    </>
     
  )
}


export default About;
