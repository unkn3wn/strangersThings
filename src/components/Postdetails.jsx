import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { fetchPosts } from "../api/auth";
import { messages } from "../api/auth";
import useAuth from "../Hooks/Authhook";
import styles from "../ComponentCss/PostDetail.module.css";

const SpecificPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [content, setContent] = useState([]);

  const [singlePost, setSinglePost] = useState([]);

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
    <div className={styles.main}>
      <h1 className={styles.wording}>Title: {singlePost.title}</h1>
      <h3 className={styles.wording}>Description: {singlePost.description}</h3>
      <h4 className={styles.wording}>Location: {singlePost.location}</h4>

      <h4 className={styles.wording}>Price: ${singlePost.price}</h4>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const result = await messages(singlePost._id, token, content);
          setContent("");
          console.log("messages", result);
        }}
      >
        <label>Send A Message</label>
        <input
          type="text"
          placeholder="Send a Message"
          variant="standard"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default SpecificPost;
