import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Greeting from './components/greeting/greeting_container';
import Map from './components/maps/map';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting />
      <Route exact path='/' component={Map}/>
      </div>
    );
  }
}

export default App;
