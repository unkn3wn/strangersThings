import { Link } from "react-router-dom";
import LogoutUser from "./Logout";
import useAuth from "../Hooks/Authhook";
import styles from "../ComponentCss/Navbar.module.css"

export default function Navbar({ setToken }) {
  const { token } = useAuth();
  if (!token) {
    return (
      <div className={styles.auth}>
        <Link className={styles.login} to="/auth/login">Login</Link>
        <Link className={styles.register} to="/auth/register">Register</Link>
      </div>
    )
  } else
    return (
      <div className={styles.auth}>
        <Link className={styles.home} to="/">Homepage</Link>
        <Link className={styles.post} to="/post">Posts</Link>
        <Link className={styles.user} to="/user">User</Link>
        <LogoutUser className={styles.logout} setToken={setToken} />
      </div>
    );
}
