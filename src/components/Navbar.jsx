import { Link } from "react-router-dom";
import LogoutUser from "./Logout";

export default function Navbar({ setToken }) {

    return (
        <div>
            <LogoutUser setToken={setToken} />
            <Link to="/">Homepage</Link>
            <Link to="/post">POSTS</Link>
            <Link to="/auth/login">Login</Link>
            <Link to='/auth/register'>Register</Link>



        </div>
    )
}