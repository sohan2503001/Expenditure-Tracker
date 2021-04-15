import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state ={
    userInput: ''
  }


  outputnamedlistener = () => {
    this.setState({userInput})
  }

  


  
  render() {
    return (
      <div>
        <input type="text" onChange={}></input>
        <br></br>
        <button
        onClick={this.outputnamedlistener} >Changed</button>
        <p></p>
      </div>
    );
  }
}


export default App;
