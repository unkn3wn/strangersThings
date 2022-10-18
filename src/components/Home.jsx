
import { fetchMe } from "../api/auth"
import { useEffect, useState } from "react"

function Homepage() {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState({});

    useEffect(() => {
        async function getMe() {
            console.log("Token before fetch");
            const result = await fetchMe(token);
            console.log(result);
            setUser(result.data);
        }
        if (token) {
            getMe();
        }
        console.log("in the useEffect");
    }, [token]);

    return (
        <div className="App">
            <h4>{user?.username}</h4>
        </div>
    );
}

export default Homepage; 