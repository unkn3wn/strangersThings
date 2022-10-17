import { useEffect, useState } from "react"
import { fetchPosts } from "../api/auth"

export default function Posts() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        async function loadPosts() {
            const posts = await fetchPosts();
            setPosts(posts);
        }

        loadPosts();
    }, []);
    return (
        <div className={postContainer}>
            {posts.map((post) => {
                return (
                    <h3>{post}</h3>
                );
            })}
        </div>
    )
}
