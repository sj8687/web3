import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-evenly p-5 items-center">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
            </NavLink>

            <Link to="/about">About</Link>
            <Link to="menu/42">Menu</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Navbar;
