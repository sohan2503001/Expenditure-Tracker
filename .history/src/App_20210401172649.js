import React, { Component } from 'react';
import './App.css';


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
        value={this.state.userInputuserInput}>

        </input>
        <br></br>
        <button
        onClick={this.outputnamedlistener} >Changed</button>
        <p></p>
      </div>
    );
  }
}


export default App;