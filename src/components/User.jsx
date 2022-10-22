//call use authook 

//decunstruct the user out of it

//render user info

import { useState, useEffect } from "react"

import { userInfo } from "../api/auth"

import useAuth from "../Hooks/Authhook";
import { useNavigate } from "react-router-dom";

const User = () => {
    const { token } = useAuth();
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadUserData() {
            const result = await userInfo(token);
            const userPosts = result.data.posts
            console.log("userposts", userPosts);
            setUser(userPosts);
        }

        loadUserData();
    }, []);
    return (
        <div key={user._id}>
            {user.map((post) => {
                if (post.active === true) {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                            <button
                                onClick={() => {
                                    navigate(`/posts/${post._id}`);
                                }}
                            >
                                Go to Post
                            </button>
                        </div>
                    );
                }
            })}
        </div>
    )
}

export default User 