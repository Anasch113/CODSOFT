import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { deleteDoc, doc } from "firebase/firestore";

import { db, storage } from "../../Firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

const Delete = ({id, imageUrl}) => {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
          try {
            await deleteDoc(doc(db, "Articles", id));
            toast("Article deleted successfully", { type: "success" });
            const storageRef = ref(storage, imageUrl);
            await deleteObject(storageRef);
          } catch (error) {
            toast("Error deleting article", { type: "error" });
            console.log(error);
          }
        }
      };
  return (
    <div className='delete-container'>
      <button onClick={handleDelete} className='buttonsss'> Delete <div className="react-icons"><AiFillDelete/></div>  </button>
    </div>
  )
}

export default Delete
