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
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const charlist = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} 
      key={index}
      clicked={() => this.deleteCharhandler(index)}
      ></Char>;
    });

    return (
      
    );
  }
}


export default App;
