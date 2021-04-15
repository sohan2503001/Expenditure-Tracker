import React, { Component } from 'react';
import './App.css';
import Validate from './valiadate/Validate'
import char from './Char/Char'

class App extends Component {
  state ={
    userInput: ''
  }

  outputnamedlistener = (event) => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const charlist = this.state.userInput.spilt('').map(char => {
      return <Char character={char}></Char>;
    });

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
        {charlist}
      </div>
    );
  }
}


export default App;
