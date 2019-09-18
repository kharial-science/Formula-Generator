import React, { Component } from 'react'
import './style/index.css'

import Display from './Display'
import Inputs from './Inputs'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputsNumber: 1,
      units: []
    }
  }

  handleInputChange() {

  }

  render() {
    return (
      <div id="App" className="main-grid">
        <div className='header'>
          <h1>Formula Generator</h1>
          <p>Here is the KFs Formula Generator, enter your inputs and require units, it will do the bad work.</p>
        </div>
        <Display />
        <Inputs handleInputChange={this.handleInputChange} inputsNumber={this.state.inputsNumber}/>
      </div>
    )
  }
}

export default App;
