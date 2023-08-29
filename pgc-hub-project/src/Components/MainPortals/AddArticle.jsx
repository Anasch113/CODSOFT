import React, { useState } from "react";
import { Timestamp, collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { storage, db } from "../../Firebase";
import "./addarticle.css"
import { useUserAuth } from "../../context/UserAuthContext";
import toast, { Toaster } from 'react-hot-toast';




export default function AddArticle() {

  const {user} = useUserAuth();
  const [url ,setUrl] = useState('')
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    topic: "",
    createdAt: Timestamp.now().toDate(),
  
   
  
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePublish = () => {
    if (!formData.title || !formData.description || !formData.image || !formData.topic)  {
      alert("Please fill all the fields");

      return;
  
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
        
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          description: "",
          image: "",
          topic:"",
        });

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "Articles");
          setUrl(url)
          addDoc(articleRef, {
            title: formData.title,
            description: formData.description,
            imageUrl: url,
            topic: formData.topic,
            createdAt: Timestamp.now().toDate(),
            createdBy: user.displayName,
            downloadLink: url,
            userId:user.uid,
            
          })
          .then(()=>{
            toast.success("Submitted Successfully")
            })
            setProgress(0)
        });
      }
    );
  };

  return (
    <>
    <div className="add-article-body">

  
    <div className="add-article-container" >
  <div className="add-ar-hed">
   
  </div>
          
          <div className="form-group">
            <div className="inputs">
                <div className="single-input">

                
            <label htmlFor="">Teacher Name</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={formData.title}
              onChange={(e) => handleChange(e)}
            />
            </div>

            {/* description */}
            <div className="single-input">

           
          <label htmlFor="">Subject Name</label>
          <input
            name="description"
            className="form-control"
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />

           </div>
           <div className="single-input">

           
<label htmlFor="">Topic</label>
<input
  name="topic"
  className="form-control"
  value={formData.topic}
  onChange={(e) => handleChange(e)}
/>

 </div>
          {/* image */}
          <div className="single-input">

        
          <label htmlFor="">File</label>
          <input id="file-input"
            type="file"
            name="image"
            accept="file/*"
            className="form-control"
            onChange={(e) => handleImageChange(e)}
          />
  </div>
          {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar
                "
                style={{ width: `${progress}%` }}
              >
                {`uploading file ${progress}%`}
              </div>
            </div>
          )}
          <div className="add-btn">

          <button 
          id="ad-btn"
            className="form-control"
            onClick={handlePublish}
          >
            Submit
          </button>
          </div>
            </div>
            
          </div>

          

          
    
    
    </div>
    </div>
    <Toaster/>
    </>
  );
}