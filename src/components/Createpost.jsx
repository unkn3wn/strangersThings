import React from "react";
import { createPost } from "../api/auth";
import { useState } from "react";
import useAuth from "../Hooks/Authhook";
import {useNavigate} from "react-router-dom";

function CreateNewPost() {
  
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const { token } = useAuth();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await createPost(token, title, description, price);
          nav("/");
          setTitle("");
          setDescription("");
          setPrice("");  
          console.log(result);
          console.log(token);
        }}
      >
        <h3>Create Post</h3>
        <label>Title:</label>
        <input
          variant="standard"
          value={title}
          type="text"
          placeholder="title"
          onChange={(event) => {
            setTitle(event.target.value);
           
          }}
        />
        <label>Description:</label>
        <input
          variant="standard"
          value={description}
          type="text"
          placeholder="description"
          onChange={(event) => {
            setDescription(event.target.value);
           
          }}
        />
        <label>Price</label>
        <input
          variant="standard"
          value={price}
          type="text"
          placeholder="price"
          onChange={(event) => {
            setPrice(event.target.value);
            
          }}
        />

        <button type="submit" >Submit</button>
        
      </form>
    </div>
  );
}

export default CreateNewPost;
