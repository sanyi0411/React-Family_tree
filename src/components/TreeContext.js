import React, {useState, createContext} from "react"
import { incomingData, debugData, rootData, fooData } from "../data.js"

export const TreeContext = createContext()

export class TreeProvider extends React.Component {

    componentDidMount() {
        this.setState(() => {
            return {
                data: debugData,
                isClickedOnNode: false,
            }
        })
    }

    onClick = (nodeData, evt) => {
        this.setState(() => {
            return {
                isClickedOnNode: true,
                clickedNodeData: nodeData,
            }
        })
    }

    render() {
        return(
            <TreeContext.Provider value={{...this.state, onClick:this.onClick}}>
                {this.props.children}
            </TreeContext.Provider>
        )
    }
}

export const TreeConsumer = TreeContext.Consumer
