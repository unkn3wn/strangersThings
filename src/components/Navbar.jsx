import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">Homepage</Link>

            <Link to="/post">POSTS</Link>
            
            <Link to ="/Login">Login</Link>
            

        </div>
    )
}