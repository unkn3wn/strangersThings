
import { fetchMe } from "../api/auth"
import { useEffect, useState } from "react"
import styles from "../ComponentCss/Welcomepage.module.css"

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
        <div className={styles.welcomeSlang}>
            <h1>Welcome to Strangers Things</h1>
            <h4 className={styles.Welcomescreen}>You are logged in as: {user?.username}</h4>
            <h4 className={styles.Welcomescreen}>Enjoy Your Stay!</h4>
        </div>
    );
}

export default Homepage; 