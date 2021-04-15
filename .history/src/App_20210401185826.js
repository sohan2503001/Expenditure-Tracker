import React, { Component } from 'react';
import './App.css';
import Validate from './valiadate/Validate';
import Char from './Char/Char';

class App extends Component {
  state ={
    userInput: ''
  }

  outputnamedlistener = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharhandler = (index) => {

  }

  render() {
    const charlist = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} 
      key={index}
      clicked={() this.deleteCharhandler(index)}
      ></Char>;
    });

    return (
      <div className="App">
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
