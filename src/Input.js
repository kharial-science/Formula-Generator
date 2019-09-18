import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super()
    }

    render(){
        return(
            <div className="Input">
                <input type="text" placeholder="unité"></input>
                <input type="number" placeholder={0}></input>
            </div>
        )
    }
}

export default Input