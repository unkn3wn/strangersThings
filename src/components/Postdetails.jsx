import { useState, useEffect } from "react";

import { Navigate, useNavigate, useParams } from "react-router-dom";
import { fetchPosts } from "../api/auth";

const SpecificPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [singlePost, setSinglePost] = useState({});

  // get fetchposts

  useEffect(() => {
    async function loadPosts() {
      const result = await fetchPosts();
      const posts = result.data.posts;
      const [post] = posts.filter((specPost) => {
        return specPost._id === id;
      });
      setSinglePost(post);
    }

    loadPosts();
  }, []);

  //filter through posts to get param
  return (
    <div>
      <h2>{singlePost.title}</h2>
      <h2>{singlePost.location}</h2>
      <h2>{singlePost.price}</h2>
      <h3>{singlePost.description}</h3>
      <form>
        <input type="text" placeholder="Send a Message" />
        <button
          type="submit"
          onClick={() => {
            navigate("/post");
          }}
        >
          Send!
        </button>
      </form>
    </div>
  );
};
//set the state pf singlePost to those params

//return display of more details

export default SpecificPost;
