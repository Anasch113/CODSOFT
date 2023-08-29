import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../Home/Navbar'
import { useUserAuth } from '../../context/UserAuthContext';
import Swal from 'sweetalert2';
import {updateProfile} from "firebase/auth"
import { auth } from '../../Firebase';
import "./signup.css"
const Signup = () => {
   const navigate = useNavigate();
const {signUp} = useUserAuth();

    const [email, setEmail] = useState("")
    const [password,  setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState("");
   

    const handleSubmit = async(e)=>{

        e.preventDefault()
      
setError("")
        
        try {


          await  signUp(email, password);
          updateProfile(auth.currentUser,{displayName:name})
          toast.success("Signup Successful. You have successfully signed up!");
            navigate("/portal/mainportal")
          } 
          
          catch (err) {
             // Display SweetAlert for specific error conditions
            if (err.code === "auth/weak-password") {
                Swal.fire("Weak Password", "Please choose a stronger password.", "error");
            } else if (err.code === "auth/email-already-in-use") {
                Swal.fire("User Exists", "This email is already registered.", "error");
            } else {
                Swal.fire("Please fill up all fields",  ); // Generic error message
            }
       
          };
    }

  
  return (
<>
    <Navbar/>
    <div id='signup-portal' className='portal-container'>

    <div id='signup-heading' className="portal-heading">
       <div id='porh1'>Let's Registerd yourself on <span>PGC HUB</span> </div>
       
    </div>

       <form id='portal-form' onSubmit= {handleSubmit} className="portal-form">
   
 <div className="inputs">
 <div  className="single-input">

<label id='label' htmlFor="">Name</label>
<input id='name' type="text" name='name' placeholder='Enter your Username' onChange={ (e)=> setName(e.target.value)} />
</div>
<div  className="single-input">

   <label id='label' htmlFor=""> Email</label>
   <input id='email' type="email" name='email' placeholder='Enter your Email Address' onChange={ (e)=> setEmail(e.target.value)} />
</div>
<div className="single-input">

   <label id='label' htmlFor="">Password</label>
   <input type="password" name='password' placeholder=' Enter your Password' onChange={ (e)=> setPassword(e.target.value)} />
</div>
</div> 
   <div id='signup-btn' className="button">
       <button>SignUp</button>
   </div>
   <div className='end-sub-txt'>
           <span id='ntph'>Already have an account?</span>  <b > <Link id='hhh' to="/portal"><span id='sin'>Login now.</span></Link></b>
          </div>

       </form>
   
   </div>
   <Toaster/>
   </>
  )
}

export default Signup
