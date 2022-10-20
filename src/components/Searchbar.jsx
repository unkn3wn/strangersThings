import { useState, useEffect } from "react";
import { fetchPosts } from "../api/auth";

function Searchbar() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadPosts() {
      const result = await fetchPosts();
      setPosts(result.data.posts);
      console.log(result.data.posts);
    }

    loadPosts();
  }, []);

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

  return (
    <div>
      <form>
        <input type="text" placeholder="Search for Posts" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

// then, in our jsx below... map over postsToDisplay instead of posts

export default Searchbar;
