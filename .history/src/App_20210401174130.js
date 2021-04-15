import React, { Component } from 'react';
import './App.css';
import Validate from './valiadate/Validate'
import Char from './Char/Char.js'

class App extends Component {
  state ={
    userInput: ''
  }

  outputnamedlistener = (event) => {
    this.setState({userInput: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text" 
        onChange={this.outputnamedlistener} 
        value={this.state.userInput} />
        <br></br>
        <button
        onClick={this.outputnamedlistener} >Changed</button>
        <p>{this.state.userInput}</p>
        <Validate inputlength={this.state.userInput.length}></Validate>
        {}
      </div>
    );
  }
}


export default App;
