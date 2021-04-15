import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userOutputs: [
      {username: 'sohan'}
    ]
  };

  eventHandler = (event) => {
    this.setState({
      userOutputs: [
        {username: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div>
        <></
        <UserOutput 
        name={this.state.userOutputs[0].username}
        changed={this.eventHandler}>
        </UserOutput>
      </div>
    );
  }
}


export default App;
