import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
        <UserInput changed={this.eventHandler}/>
        <UserOutput 
        name={this.state.username}
        >
        </UserOutput>
      </div>
    );
  }
}


export default App;
