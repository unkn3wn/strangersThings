import { fetchPosts } from "../api/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function SinglePost() {

    const [onepost, setOnePost] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function loadPosts() {
            const onepost = await fetchPosts(id);
            setOnePost(result.data.onepost)

        }

        loadPosts();
    }, []);

    return (
        <div>
            <h3>{onepost.title}</h3>
            <h3>{onepost.description}</h3>
            <h4>{onepost.price}</h4>
            <button onClick={async () => {
                navigate(`/posts`)
            }}>
                Back
            </button>


        </div>
    )

}

export default SinglePost; 