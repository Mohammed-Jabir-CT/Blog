import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { database,auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

function Create({isAuth}) {
    let navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const postsCollectionRef = collection(database, "posts");
    const createPost = async () =>{
        await addDoc(postsCollectionRef, {title,content,author:{name:auth.currentUser.displayName, id:auth.currentUser.uid}});
        navigate("/");
    };
    useEffect(()=>{
        if(!isAuth){
          navigate("/login");
        }
      }, []);
    return (
        <div className="createPostPage">
            <div className="cpContainer">
                <h1>Create A Post</h1>
                <div className="inputGp">
                    <label htmlFor="">Title</label>
                    <input 
                        type="text" 
                        placeholder="Title.." 
                        onChange={
                            (event) => {
                                setTitle(event.target.value);
                            }
                        }
                        />
                </div>
                <div className="inputGp">
                    <label htmlFor="">Content</label>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Content.." 
                    onChange={
                            (event) => {
                                setContent(event.target.value);
                            }
                    }></textarea>
                </div>
                <button onClick={createPost}>Post</button>
            </div>
        </div>
    );
}

export default Create;