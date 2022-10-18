import React from "react";
import { createPost } from "../api/auth";
import { useState } from "react";



function CreateNewPost() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await createPost(title, description);
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
        <label>description:</label>
        <input
          variant="standard"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="text"
          placeholder="description"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateNewPost