import { useEffect, useState } from "react";
import { fetchPosts } from "../api/auth";
import CreateNewPost from "../components/Createpost";
import { deletePost } from "../api/auth";
import useAuth from "../Hooks/Authhook";
import { useNavigate } from "react-router-dom";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { token } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function loadPosts() {
      const result = await fetchPosts();
      setPosts(result.data.posts);
    }

    loadPosts();
  }, []);
  function postMatches(post, text) {
    return post.title.toLowerCase().includes(text);
  }
  const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <div key={posts._id}>
      <h5>Please search in lowercase!</h5>
      <input
        type="text"
        value={searchTerm}
        placeHolder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CreateNewPost />
      {postsToDisplay.map((post) => {
        return (
          <div key={post.title}>


            <div />
            <h3>{post.title}</h3>
            <h4>{post.price}</h4>

            <button
              onClick={() => {
                navigate(`/posts/${post._id}`);
              }}
            >
              See Details
            </button>

            <button
              onClick={async () => {
                const deletedPost = await deletePost(token, post._id);
                console.log(deletedPost);
                // filter over the posts in state, and remove the post you just deleted
                // resset your posts in state with the new filtered posts
                if (deletedPost.success) {
                  const currentPost = posts.filter((singlePost) => {
                    console.log("post", post);
                    console.log("deletepost", deletedPost);
                    return singlePost._id !== post._id;
                  });

                  setPosts(currentPost);
                }
              }}
            >
              Delete
            </button>
          </div>
        );

      })}
    </div>
  );
}

