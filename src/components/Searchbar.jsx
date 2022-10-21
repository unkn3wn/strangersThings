import react from "react";
import { fetchPosts } from "../api/auth";
import { useState } from "react";

function SearchBar() {
  const [searchSpecific, setSearchSpecific] = useState("");

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


    {/* passing in sP = specificPos */}

    </div>
  );
}


export default SearchBar;
