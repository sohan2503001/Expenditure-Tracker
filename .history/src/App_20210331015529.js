import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    UserOutput: [
      username:
    ]
  }


  render() {
    return (
      <div>
        <UserInput></UserInput>
        <UserOutput></UserOutput>
      </div>
    );
  }
}


export default App;
