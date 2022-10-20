import { useState, useEffect } from "react"

import { useParams, useNavigate } from "react-router-dom"
import { fetchPosts } from "../api/auth";


const SpecificPost = () => {


  const { dP } = useParams();

  const [singlePost, setSinglePost] = useState({});

  // get fetchposts 

  useEffect(() => {
    async function loadPosts() {
      const posts = await fetchPosts();
      if (dP === singlePost) {
        const currentPost = singlePost.filter((specPost) => {
          console.log("hello")
          return dP === specPost;
        });
    
        setSinglePost(currentPost);
      }
      
    }

    loadPosts();
  }, []);

  //filter through posts to get param 

}
//set the state pf singlePost to those params

//return display of more details

export default SpecificPost; 