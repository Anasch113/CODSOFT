import React from 'react'
import "./footer.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
     <section className="contact">
	
		<div className="main-contact">
			
		
			
			<div className="contact-content">
				<h5>Getting started</h5>
				<li><Link to ="/portal/mainportal">Student Portal</Link></li>
				<li><Link to ="/signup">Registration</Link></li>
				<li><Link to ="/portal/mainportal/assignments">Submit Assignments</Link></li>
				<li><Link to ="portal">Login </Link></li>
			</div>

			<div className="contact-content">
				<h5>Explore</h5>
				<li><Link to ="/">Home</Link></li>
				<li><Link to ="/aboutt"> Features</Link></li>
				<li><Link to ="/aboutt">Community</Link></li>
				<li><Link to ="/aboutt">Privacy</Link></li>
			</div>


			<div className="contact-information">
			<h5>Contact Us</h5>
	<span className='footer-con-txt'>Punjab Group Of Colleges</span>
	<span className='footer-con-txt'> 1/2 km Canal Road Jahanian</span>
	<span className='footer-con-txt'>Email: anaschaudry2002@gmail.com</span>
	<span className='footer-con-txt'> +923289602109</span>
</div>

		</div>
	</section>

	<div className="end-text">
		<h5>© 2023 All Rights Reserved by Anas Rafiq Ch</h5>
	</div>
    </div>
  )
}

export default Footer
