import { connect } from 'react-redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import '../../assets/stylesheets/shared.css'
import './navbar.css';

import { logoutUser } from '../../util/session_api_util';

export class NavBar extends Component {
  render() {
    return <nav className="navbar">
        <Link to="/" className="link-style">
          <img alt='' className="icon" src="https://image.flaticon.com/icons/svg/1175/1175936.svg" />
        </Link>
        <Link to="/main" className="link-style active home">
          Home
        </Link>
        <div className="nav-links">
          <Link to="/main" className="link-style">
            Toilets Near Me
          </Link>
          <Link to="/best-toilets" className="link-style">
            Best Toilets
          </Link>
        </div>
        <div className="user-nav">
          <GreetingContainer />
        </div>
      </nav>;
  }
}


const mapStateToProps = ({ session }) => {
  return {
    currentUser: session
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
