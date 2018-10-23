import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Greeting from './components/greeting/greeting_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Greeting />
      <Route exact path='/' component={MainPage}/>
      <Route exact path='toilets/create' component={ToiletFormContainer} />
      </div>
    );
  }
}

export default App;
