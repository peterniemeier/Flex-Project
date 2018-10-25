import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';
import GreetingContainer from './components//greeting/greeting_container';
import SignUpFormContainer from './components/session_form/signup_form_container';
import SignInFormContainer from './components/session_form/signin_form_container';
import Modal from './components/session_form/modal';


class App extends Component {
  render() { 
    return (
      <>
        <Modal />
        <GreetingContainer />
        <NavBar />
        <div className="App">
          <Route exact path='/toilets/new' component={ToiletFormContainer} />
          <Route exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/signin' component={SignInFormContainer} />
          <Route exact path='/' component={MainPage}/>
        </div>
      </>
    );
  }
}

export default App;
