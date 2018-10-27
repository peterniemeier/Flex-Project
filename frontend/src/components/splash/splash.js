import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/shared.css';
import './splash.css'; 
import '../../components/session_form/modal.css';

import { openModal } from "../../actions/modal_actions";
import SearchBar from './search_bar';

export class Splash extends Component {

  render() {
    const { openModal } = this.props;
    return (
        <div className="splash-container">
          <nav className='splash-header'>
            <div className='splash-links-container'>
              <Link to='/main' className='splash-link'>Toilets</Link>
            </div>
            <div className='session-btns'>
              <button className="" onClick={() => openModal("signup")}>
                Sign up
                </button>
              <button className="" onClick={() => openModal("login")}>
                Log in
                </button>
            </div>
          </nav>
          <div className="search-bar-container-splash">
            <SearchBar />
          </div>
            <div className="splash-image-container">
              <img alt='' src="https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
        </div>
    );
  }
}

const mDtP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(null, mDtP)(Splash);
