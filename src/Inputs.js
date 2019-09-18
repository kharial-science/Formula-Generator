import React, { Component } from 'react'

import Input from './Input'

class Inputs extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="Inputs">
                <Input handleInputChange={this.props.handleInputChange} />
            </div>
        )
    }
}

export default Inputs