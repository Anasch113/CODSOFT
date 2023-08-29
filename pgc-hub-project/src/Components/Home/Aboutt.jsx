import React from 'react'
import "./aboutt.css"
import Navbar from './Navbar'
import Footer from './Footer'
import aboutlogo from "../../assets/aboutlogo3.jpg"
import { useState } from 'react'
const Aboutt = () => {
    const [isExpand, setIsExpand] = useState(false);
    const handleTextVisibility = (e)=>{
      e.preventDefault();
      setIsExpand(!isExpand)
    }
  return (
    <>
    <Navbar/>
    <div className='about-containert'>
    
<div className="wrappert">
<div className="about-2-container">
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

            <span style={{color: '#2C2B6F', height: '100px'}}> <h5>
             PGC-Hub is a student-centric online hub, carefully designed to streamline the student data management process and make assignment submission a breeze. We understand the challenges students face in organizing their academic journey, and we're here to help.  </h5></span>
            </>
          )
        }
       </h5>
        <a onClick={handleTextVisibility} href="">  {isExpand ? 'Read Less' : 'Read More'}</a>

    </div>
</div>
<div className="why-us">
  <div className="why-us-heading">
    <span>Why Choose PGC-Hub?</span>
  </div>
  <div className="why-us-text">
     <span>Save time and effort with our user-friendly platform that simplifies student management and assignment submission.</span>
     <span>Access your academic information and assignments anytime, anywhere, from any device.</span>
     <span>Join a vibrant online community of students and educators, fostering collaboration and knowledge sharing.</span>
     <span>our data's security is our top priority. We employ state-of-the-art security measures to protect your information.</span>
     <span>We are constantly evolving, incorporating the latest technology to enhance your learning experience.</span>
  </div>
</div>
<div className="features-containert">
        <div className="fea-heading">
           <span>
           Features
            </span> 
            <div className="line"></div>
          </div>
  <div className="features">
    <div className="head">
    <span className="head-txt">
    Student Data Management
      </span>
    </div>
    <div className="fea-txt">
    <span className='fea-text'>
    We offer an intuitive and secure platform for students to manage their academic profiles effortlessly.
      </span>
      <span className='fea-text'>
    Track your course progress, and access important documents in one central location.
      </span>
    </div>
  </div>
  <div className="features">
    <div className="head">
      <span className="head-txt">
      Assignment Submission
      </span>

    </div>
    <div className="fea-txt">
    <span className='fea-text'>
    Say goodbye to the hassle of submitting assignments physically. PGC-Hub provides a seamless digital submission process, 
      </span>
     
      <span className='fea-text'>
      allowing you to upload your work with just a few clicks.Stay organized and never miss a deadline again.
      </span>
    </div>
  </div>
  <div className="features">
    <div className="head">
    <span className="head-txt">
    Personalized Experience
      </span>
    </div>
    <div className="fea-txt-container">
      <span className='fea-text'>
      PGC-Hub tailors your experience to your unique educational journey.
      </span>
      <span className='fea-text'>
      We are constantly evolving, incorporating the latest technology to enhance your learning experience.
      </span>

    </div>
    
  </div>
        </div>
       
</div>
      
    </div>
    <div className="ab-footer">
    <Footer/>
    </div>
   
    </>
  )
}

export default Aboutt
