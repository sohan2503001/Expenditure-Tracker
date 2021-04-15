import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
      username: 'sohan'
  };

  eventHandler = (event) => {
    this.setState({
        username: event.target.value
    })
  }
  
  render() {
    return (
      <div>
        <UserInput 
        changed={this.eventHandler} 
        value={this.state.username}/>
        <UserOutput name={this.state.username}/>
      </div>
    );
  }
}


export default App;
