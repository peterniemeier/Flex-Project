import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
// import { Provider } from 'react-redux';
import SignUpFormContainer from './components/session_form/signup_form_container';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';
import GreetingContainer from './components/greeting_container';

class App extends Component {
  render() { 
    return (
      <>
        <GreetingContainer />
        <NavBar />
        <div className="App">
          <Route exact path='/toilets/new' component={ToiletFormContainer} />
          <Route exact path='/login' component={SignUpFormContainer} />
          <Route exact path='/' component={MainPage}/>
        </div>
      </>
    );
  }
}

export default App;
