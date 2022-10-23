//call use authook 

//decunstruct the user out of it

//render user info

import { useState, useEffect } from "react"

import { userInfo } from "../api/auth"

import useAuth from "../Hooks/Authhook";
import { useNavigate } from "react-router-dom";

const User = () => {
    const { token } = useAuth();
    const [userpost, setUserPost] = useState([]);
    const [usermessage, setUserMessage] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadUserPosts() {
            const result = await userInfo(token);
            console.log("result", result)
            const userPosts = result.data.posts
            console.log("userposts", userPosts);
            setUserPost(userPosts);
        }

        loadUserPosts();
    }, []);

    useEffect(() => {
        async function loadUserMsgs() {
            const result = await userInfo(token);
            const userMsgs = result.data.messages
            console.log("userMsgs", userMsgs);
            setUserMessage(userMsgs);
        }

        loadUserMsgs();
    }, []);

    return (
        <div key={userpost._id}>
            <h1>Your Posts</h1>
            {userpost.map((post) => {
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
            <h1>Your Messages</h1>
            {usermessage.map((message) => {
                return (
                    <div>
                        <h2>{message.content}</h2>
                    </div>
                );
            })}
        </div>

    )
}

export default User 