//call use authook 

//decunstruct the user out of it

//render user info

import { useState } from "react"

import { userInfo } from "../api/auth"

import useAuth from "../Hooks/Authhook";

const User = () => {
    const { token } = useAuth();
    const [user, setUser] = useState();

    useEffect(() => {
        async function loadUserData() {
            const result = await userInfo();
            console.log(result);
            setUser(user);
        }

        loadUserData();
    }, []);

    return (
        <div><h2>User</h2></div>
    )


}

export default User 