import React, { Component } from 'react'
import Tree from "react-d3-tree";
import {TreeConsumer} from "./TreeContext"
import clone from "clone"
import '../App.css';

export default class TreeComponent extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            dimensions: {}
        }
    }

    addChild(parentNode, childNode) {
        parentNode.children.push(childNode)
    }

    render() {
        if (this.state.data === []) {
            console.log("Loading...")
            return (
                <div>Loading...</div>
            )
        }
        return (
            <TreeConsumer>
                {(value) => {
                    const { data, onClick } = value

                    if (data === undefined) {
                        return (null)
                    }

                    return (
                        <div className="tree">
                            <Tree 
                                data={data}
                                orientation={"vertical"}
                                translate={{x: 300, y: 200}}
                                pathFunc="elbow"
                                onClick={onClick}
                                />
                        </div>
                        )
                        /*
                   */
                }}
            </TreeConsumer>
        )
    }
}
