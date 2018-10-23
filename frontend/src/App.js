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
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/toilets/create' component={ToiletFormContainer} />
      <Route exact path='/' component={MainPage}/>
      </div>
    );
  }
}

export default App;
