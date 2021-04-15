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
        {username:}
      ]
    })
  }


  render() {
    return (
      <div>
        <UserInput></UserInput>
        <UserOutput name={this.state.userOutputs[0].username}></UserOutput>
      </div>
    );
  }
}


export default App;
