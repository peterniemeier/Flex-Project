import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';
import SignUpFormContainer from './components/session_form/signup_form_container';
import SignInFormContainer from './components/session_form/signin_form_container';
import Modal from './components/session_form/modal';
import ToiletShowContainer from './components/toilet_show/toilet_show_container';
import Splash from './components/splash/splash';

class App extends Component {
  render() { 
    return (
      <div className="App">
          <Modal />
          <Switch>
            <Route exact path='/' component={Splash} />
            <Route path='/' component={NavBar} />
          </Switch>
          <Route path='/main/:toiletId' component={MainPage} />
          <Route exact path='/main/' component={MainPage}/>
          <Route exact path='/toilets/new' component={ToiletFormContainer} />
          <Route exact path='/toilets/:toiletId' component={ToiletShowContainer} />
          {/* <Route exact path='/signup' component={SignUpFormContainer} />
          <Route exact path='/signin' component={SignInFormContainer} /> */}
      </div>
    );
  }
}

export default App;
