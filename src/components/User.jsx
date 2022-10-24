//call use authook 

//decunstruct the user out of it

//render user info

import { useState, useEffect } from "react"

import { userInfo } from "../api/auth"
import { deletePost } from "../api/auth";

import useAuth from "../Hooks/Authhook";
import { useNavigate } from "react-router-dom";
import styles from "../ComponentCss/User.module.css"

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
        <div className={styles.user} key={userpost._id}>
            <h1 className={styles.userpoststitle}>Your Posts</h1>
            {userpost.map((post) => {
                if (post.active === true) {
                    return (
                        <div className={styles.userposts}>
                            <h2>{post.title}</h2>
                            <button
                                onClick={() => {
                                    navigate(`/posts/${post._id}`);
                                }}
                            >
                                Go to Post
                            </button>

                            <button
                                onClick={async () => {
                                    const deletedPost = await deletePost(token, post._id);
                                    console.log(deletedPost);


                                    if (deletedPost.success) {
                                        const currentPost = userpost.filter((singlePost) => {
                                            return singlePost._id !== post._id;
                                        });

                                        setUserPost(currentPost);
                                    }
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    );
                }
            })}
            <h1 className={styles.usermessagetitle}>Your Messages</h1>
            {
                usermessage.map((message) => {
                    return (
                        <div className={styles.usermessage}>
                            <h2>{message.content}</h2>
                        </div>
                    );
                })
            }
        </div >

    )
}

export default User 