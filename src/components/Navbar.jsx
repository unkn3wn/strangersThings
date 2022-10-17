import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/">Homepage</Link>
            <Link to="/Post/Posts">POSTS</Link>
        </div>
    )
}