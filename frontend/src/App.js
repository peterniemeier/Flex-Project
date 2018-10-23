import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Greeting from './components/greeting/greeting_container';
import MainPage from './components/main_page/main_page';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting />
      <Route exact path='/' component={MainPage}/>
      </div>
    );
  }
}

export default App;
