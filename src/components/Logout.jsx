import { useNavigate } from "react-router-dom";
import styles from "../ComponentCss/Navbar.module.css"

export default function LogoutUser({ setToken }) {

    const navigate = useNavigate();

    return (
        <button 
        className={styles.nav}
            onClick={() => {
                localStorage.removeItem("token");
                setToken("");
                navigate("/auth/login")
                location.reload(true)
            
            }}
        >
            Log Out
        </button>

    );
}