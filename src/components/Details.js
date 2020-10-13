import React, { Component } from 'react'
import Tree from 'react-d3-tree';
import '../App.css';
import {TreeConsumer} from "./TreeContext"

export default class Details extends Component {
    render() {
            return (
                <TreeConsumer>
                    {(value) => {
                        const { data, onClick, isClickedOnNode, clickedNodeData } = value

                        console.log("ClickedNode: ", clickedNodeData)

                        if(!isClickedOnNode) {
                            return (null)
                        }
                        
                        return (
                            <div className="details">
                                Name:  {clickedNodeData.name}<br/>
                                Date of birth: {clickedNodeData.dob}<br/>
                            </div>
                        )
                        
                    }}
                </TreeConsumer>
        )
    }
}
