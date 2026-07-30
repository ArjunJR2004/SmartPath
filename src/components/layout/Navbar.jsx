import { NavLink } from "react-router-dom";

import { FaGraduationCap } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
    return (
        <header className="navbar">

            <div className="logo">
                <FaGraduationCap className="logo-icon" />
                <span>SmartPath</span>
            </div>

            <nav className="nav-links">
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/courses">Courses</NavLink>
                    </li>

                    <li>
                        <NavLink to="/wishlist">WishList</NavLink>
                    </li>

                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>

                    <li>
                        <NavLink to="/register">Register</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Navbar;