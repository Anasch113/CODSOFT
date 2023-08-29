import React from 'react'
import "./portal.css"

import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Home/Navbar'
import { useUserAuth } from '../../context/UserAuthContext';
import Swal from 'sweetalert2';
const Portal = () => {
  const navigate = useNavigate();
  const {logIn} = useUserAuth();
  
  
      const [email, setEmail] = useState("")
      const [password,  setPassword] = useState("")
      const [error, setError] = useState("");
     
  
      const handleSubmit = async(e)=>{
  
          e.preventDefault()
         
        

          
          try {
  
  
            await  logIn(email, password);
           
              navigate("/portal/mainportal")
              toast.success("Login Successfully")
            } 
            
            catch (err) {
           
               // Display SweetAlert for specific error conditions
              if (err.code === "auth/wrong-password") {
                  Swal.fire("Wrong Password", "Please provide a correct password.", "error");
              } else if (err.code === "auth/user-not-found") {
                  Swal.fire("Student not Exists", "Please provide correct credentials.", "error");
              } else {
                  Swal.fire("Please fill up all fields", ); // Generic error message
              }
         
            };
      }
  return (
    <>
   

   
    <Navbar/>
    <div className='portal-container'>

     <div className="portal-heading">
        <h1 id='porh'>  PGC HUB Student <span>Portal</span></h1>
        
     </div>

        <form  onSubmit={handleSubmit} className="portal-form">
    <div className="portal-form-heading">
      <span> Login to continue</span>
    </div>
  <div className="inputs">
<div className="single-input">

    {/* <label htmlFor=""> Email</label> */}
    <input type="email" placeholder='Email Address' onChange={(e)=> setEmail(e.target.value)} />
</div>
<div className="single-input">

    {/* <label htmlFor="">Password</label> */}
    <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
</div>
</div> 
    <div className="button">
        <button>Login</button>
    </div>
   
    <div className='end-sub-txt'>
           <span id='ntph'> New to PgcHub?</span>  <b > <Link id='hhh' to="/signup"><span id='sin'>Sign up now.</span></Link></b>
          </div>

        </form>
    
    </div>
    <div> <Toaster/></div>
    </>
  )
}

export default Portal
