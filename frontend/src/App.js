import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path='/' component={MainPage}/>
      </div>
    );
  }
}

export default App;
