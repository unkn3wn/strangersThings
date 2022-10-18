import { useEffect, useState } from "react"
import { fetchPosts } from "../api/auth"

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const result = await fetchPosts();
            setPosts(result.data.posts)

        }

        loadPosts();
    }, []);
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.title}>
                        <h3>{post.title}</h3>
                        <h3>{post.description}</h3>
                        <h4>{post.price}</h4>
                        <h4>{post.author.username}</h4>
                        <h3>{post.location}</h3>

                    </div>
                );
            })}
        </div>
    )
}
