import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';
import ToiletShowContainer from './components/toilet_show/toilet_show_container';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Route path='/main' component={MainPage}/>
        <Route exact path='/toilets/new' component={ToiletFormContainer} />
        <Route exact path='/toilets/:toiletId' component={ToiletShowContainer}/>
      </div>
    );
  }
}

export default App;
