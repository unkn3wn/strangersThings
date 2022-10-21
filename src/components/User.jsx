//call use authook 

//decunstruct the user out of it

//render user info

import { useState, useEffect } from "react"

import { userInfo } from "../api/auth"

import useAuth from "../Hooks/Authhook";

const User = () => {
    const { token } = useAuth();
    const [user, setUser] = useState([]);

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
                if (post.active) {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                        </div>
                    );
                }
            })}
        </div>
    )
}

export default User 