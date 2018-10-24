import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Greeting from './components/greeting/greeting_container';
import MainPage from './components/main_page/main_page';
// import { Provider } from 'react-redux';
import SignUpFormContainer from './components/session_form/signup_form_container';


class App extends Component {
  render() { 
    return (
      <>
        <Greeting />
        <div className="App">
          <Route exact path='/login' component={SignUpFormContainer} />
          <Route exact path='/' component={MainPage}/>
        </div>
      </>
    );
  }
}

export default App;
