import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path='/main' component={MainPage}/>
        <Route exact path='/toilets/new' component={ToiletFormContainer} />
      </div>
    );
  }
}

export default App;
