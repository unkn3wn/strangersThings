import react from "react";
import { fetchPosts } from "../api/auth";
import { useState } from "react";

function SearchBar() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    // return true if any of the fields you want to check against include the text
    // strings have an .includes() method
    return(
      
      if(filteredPosts){
        console.log("Hello")

      }

    )
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;
  return (
    <div>
      <form>
        {/* whatever is being written in input (string) it will search (filter)*/}
        <input
          type="text"
          placeholder="Search For Specific Post"
          onChange={(event) => {
            setSearchSpecific(event.target.value);
          }}
        />
      </form>
    </div>
  );

  // then, in our jsx below... map over postsToDisplay instead of posts
}

export default SearchBar;
