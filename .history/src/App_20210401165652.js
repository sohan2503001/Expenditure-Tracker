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
      
    );
  }
}


export default App;
