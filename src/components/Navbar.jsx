import { Link } from "react-router-dom";
import LogoutUser from "./Logout";
import useAuth from "../Hooks/Authhook";
import styles from "../ComponentCss/Navbar.module.css";

export default function Navbar({ setToken }) {
  const { token } = useAuth();

  if (token) {
    return (
      <div className={styles.auth}>
        <Link className={styles.nav} to="/">
          Homepage
        </Link>
        <Link className={styles.nav} to="/post">
          Posts
        </Link>
        <Link className={styles.nav} to="/user">
          User
        </Link>
        <LogoutUser setToken={setToken} />
      </div>
    );
  }
  return (
    <div className={styles.auth}>
      <Link className={styles.login} to="/auth/login">
        Login
      </Link>
      <Link className={styles.register} to="/auth/register">
        Register
      </Link>
    </div>
  );
}
