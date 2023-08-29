import React from 'react'
import "./services.css"

import edu from "../../assets/edu.png"
import natu from "../../assets/natu.png"
import res from "../../assets/res.png"
const Services = () => {
  return (
    <div className='services-container'>
      <div className="level-container">

     
      <div className="services-heading wow animate__animated animate__slideInLeft">
        <h3>We Provide <span id='best-s'>Best Services</span> </h3>
      </div>
     <div className="cards wow animate__animated animate__fadeInUp" data-wow-delay="0.5s">
     
     <div className="single-card " >
<div className="card-icons">
<img src={res} alt="" />
</div>
<div className='single-card-heading'>
<h4>Top Result</h4>
</div>
<div className="card-text">
Here, you'll find stories of students who have reached the zenith of their academic pursuits. From high GPA achievers to scholarship recipients, research pioneers to leadership trailblazers.
</div>
      </div>
      <div className="single-card">
<div className="card-icons">
<img src={edu} alt="" />
</div>
<div className='single-card-heading'>
 <h4>Standard Education</h4>
</div>


<div className="card-text">
Immerse yourself in our standard education services, where excellence meets opportunity. We offer quality instruction, comprehensive curricula, and a supportive learning environment to foster your growth and success.!
</div>
      </div>
      <div className="single-card">
<div className="card-icons">
<img src={natu} alt="" />
</div>
<div className='single-card-heading'>
<h4>Good Environment</h4>
</div>
<div className="card-text">
Discover our college's nurturing environment service, where a vibrant campus, supportive faculty, and inclusive community create an ideal atmosphere for holistic growth..Explore our college's nurturing environment service.
</div>
      </div>
     </div>
     </div>
    </div>
  )
}

export default Services
