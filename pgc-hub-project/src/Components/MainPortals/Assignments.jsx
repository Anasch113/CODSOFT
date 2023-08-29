import React from 'react'
import "./assignments.css"
import { useState, useEffect } from "react";
import Navbar from '../Home/Navbar';
import {AiOutlineDownload} from "react-icons/ai"
import { db } from '../../Firebase';
import { BiSolidUser}  from "react-icons/bi"
import {AiFillFile} from "react-icons/ai"
import AddArticle from "./AddArticle"
import Delete from './Delete';
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import pic1 from "../../assets/natu.png"
import { useUserAuth } from '../../context/UserAuthContext';




const Assignments = () => {

   
const {user} = useUserAuth();


const [articles, setArticles] = useState([])
  useEffect(() => {
    const articleRef = collection(db, "Articles")
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  
  }, []);
  return (
<>

    <Navbar/>
    <div className='as-body'>
      
    <div className="main-as-container">
      <div className="main-as-heading">

<h1>Let's show some work!</h1>
<span id='rules'> Rules </span>
<span>1- Dont submit same response multiple times</span>
<span>2- Only submit your assign tasks</span>
<span>3- All formats are allow but pdf pptx will be preffered</span>

      </div>


    </div>

    <AddArticle />
    <div className="boxes-headingss">
    

<h5 className="line-texts">
Assignments Info
</h5>
<div className="line">

</div>
</div>

    {/* // Submission Form */}
   
    <div className='root-container'>
      {articles.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            topic,
            imageUrl,
            createdAt,
            createdBy,
            userId
           
            
          }) => (
            <div className="submit-container-1" key={id}>
               
             
              <div className="row">
              <div className="react-icons">
              <h5><BiSolidUser/>  {createdBy}</h5> 
                </div>
                <div className="main-submit">
               
                    {/* <img
                      src={imageUrl  }
                    

                     
                     
                    
                    /> */}
                    
                  
                  <a href={imageUrl} target='_main' className='down-btn'>Download <div className='react-icons'><AiOutlineDownload/></div></a>
                  <div className="delete-con">
                    {
                      user && user.uid === userId &&(

                        <Delete id ={id} imageUrl = {imageUrl}/>
                      )
                    }

                  </div>
                </div>
                
                <div className="Submit-details">
               
                 
                  <span className='sp-bl'><span className='mc'>To:</span> {title}</span>
                  <span className='sp-bl'><span className='mc'>Subject:</span>  {description}</span>
                  <span className='sp-bl'><span className='mc'>Topic:</span>  {topic}</span>
                  <span id='date-as'><span className='mc'>Date:</span>{createdAt.toDate().toDateString()}</span>
                 
               
              
                  
                </div>
              </div>
              
            </div>
          )
        )
      )}
    </div>
    </div>
    </>
  )
}

export default Assignments


