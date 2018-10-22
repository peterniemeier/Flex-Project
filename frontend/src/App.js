import React, { Component } from 'react';
import Greeting from './components/greeting/greeting_container';
import Map from './components/maps/map';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting />
      <Map />
      </div>
    );
  }
}

export default App;
