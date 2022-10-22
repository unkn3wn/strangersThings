import { Link } from "react-router-dom";
import LogoutUser from "./Logout";
import useAuth from "../Hooks/Authhook";

export default function Navbar({ setToken }) {
  const { token } = useAuth();
  return (
    <div>
      <LogoutUser setToken={setToken} />
      <Link to="/">Homepage</Link>
      <Link to="/post">POSTS</Link>
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Link to="/user">User</Link>
    </div>
  );
}
