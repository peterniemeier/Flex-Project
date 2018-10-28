import './assets/stylesheets/reset.css';
import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from './util/route_util';
import NavBar from './components/navbar/navbar_container';
import MainPage from './components/main_page/main_page';
import ToiletFormContainer from './components/toilet_form/toilet_form_container';
import Modal from './components/session_form/modal';
import ToiletShowContainer from './components/toilet_show/toilet_show_container';
import Splash from './components/splash/splash';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Modal />
            <Route path='/' component={NavBar} />
          <Switch>
            <Route path='/main/:toiletId' component={MainPage} />
            <Route path='/main/' component={MainPage}/>
            <Route path='/toilets/new' component={ToiletFormContainer} />
            <Route path='/toilets/:toiletId' component={ToiletShowContainer} />
            <AuthRoute exact path='/' component={Splash} />
            <Redirect to='/main' />
          </Switch>
      </div>
    );
  }
}

export default App;
