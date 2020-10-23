import React from 'react'
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from './Navbar'
import MyTree from "./MyTree"
import About from "./About"
import Home from "./Home"
import MyProfile from "./MyProfile"
import Contact from "./Contact"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { incomingData, debugData, rootData, fooData } from "../data.js"

export default function Main() {
    const { isAuthenticated } = useAuth0()

    return (
        //isAuthenticated && (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mytree" exact component={MyTree} />
                    <Route path="/myprofile" exact component={MyProfile} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                </Switch>
            </Router>
        //)
    )
}
