import React from 'react'
import {Link, withRouter} from "react-router-dom"
import '../App.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/mytree">
                    <li>My Tree</li>
                </Link>
                <Link to="/myprofile">
                    <li>My Profile</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
