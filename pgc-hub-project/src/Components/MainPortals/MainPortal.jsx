import React from 'react'
import { useState, useEffect } from 'react'
import { useUserAuth } from '../../context/UserAuthContext'
import Navbar from "../Home/Navbar"
import toast, {Toaster} from "react-hot-toast"
import {db} from "../../Firebase" 
import {collection, getDocs} from "firebase/firestore"


import "./mainportal.css"

import { useNavigate } from 'react-router-dom'

const MainPortal = () => {

 
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, "users")

  useEffect(()=>{
const getUsers = async()=>{
const data = await getDocs(usersCollectionRef)
setUsers(data.docs.map((doc)=>({...doc.data(), id: doc.id})))

}
getUsers();
  }, [])

const navigate = useNavigate();
    const hanldeLogOut = async()=>{
        try {
          await  logOut()
          navigate("/")
          toast.success("Logout successfully")
        } catch (error) {
            console.log(err.message)
        }
    }
    const {user, logOut, }= useUserAuth();
 
  return (
    <>
    <Navbar/>
    <div className='main-portal-container'>
      <div className="upper-container">
        
      <div className="heading">
<h2 id='bbb'>Welcome, {user && user.displayName || user.email} </h2>
{/* <h3 id='hhh'>BADGE : BSCS {smester} SMESTER</h3> */}


      </div>
     
      <div id='as-btns' className="button">

<div className="button">
<button id='as-btns1' onClick={()=>{navigate("/portal/mainportal/assignments")}}> Submit Assignments</button>

</div>
<button id='as-btns2' onClick={hanldeLogOut}>Logout</button>
</div>
      </div>
     
      <div className="m--main-container">
       
      <div className="boxes-heading">

<div className="line-txt">


<h5 className="line-text">
PGC <span>HUB</span> Student Info
</h5>
<div className="line">

</div>
</div>
<div className="st-info">
<div className="st-info-text">
Here is the all details regarding to the students. 
</div>
<div className="st-info-text">
You can find students names, students roll numbers, student CGPA and many more.

</div>

</div>
</div>
{users.map((user)=>{
   
  
  return(
    <>
   
<div className="crud-boxes">


<div  className="crud-box">
  
         <div id='crud-span'>
        {user.name}
         </div>
     
      <h5>  CGPA:    {user.CGPA}</h5>
      <h5>  Status: {user.Status}</h5>
      <h5>Roll No:  {user.Rollno} </h5>

        </div>
        </div>
  </>
  )

})}
      </div>


      
    </div>
    <Toaster/>
    </>
  )
}

export default MainPortal
