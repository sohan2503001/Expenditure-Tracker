import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  
  return (
    <div>
      <UserInput></UserInput>
    </div>
    <div>
    <UserOutput></UserOutput>
    </div>
  );
}

export default App;
