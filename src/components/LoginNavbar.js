import React, { Component } from 'react'
import logo from "../images/logo.svg"
import '../App.css';

export default class LoginNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <img src={logo} alt="logo" className="navbar-brand" height="50px"/>   
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                            myrelatives.site    
                    </li>
                    <li>
                            Build your family tree    
                    </li>
                </ul>
            </nav>
        )
    }
}
