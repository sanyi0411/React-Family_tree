import React from 'react'
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from './Navbar'
import TreeComponent from './TreeComponent';
import Details from "./Details"
import { incomingData, debugData, rootData, fooData } from "../data.js"

export default function Main() {
    const { isAuthenticated } = useAuth0()

    return (
        //isAuthenticated && (
            <div>
                <Navbar />
                <div className="main_ui">
                    <TreeComponent/>
                    <Details />
                </div>
            </div>
        //)
    )
}
