import React from 'react'
import TreeComponent from './TreeComponent';
import Details from "./Details"

export default function MyTree() {
    return (
        <div className="mytree">
            <TreeComponent/>
            <Details />
        </div>
    )
}
