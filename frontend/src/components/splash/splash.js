import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../../assets/stylesheets/shared.css';
import './splash.css'; 
import '../../components/session_form/modal.css';

import { setCenter } from '../../actions/map_actions';
import { openModal } from '../../actions/modal_actions';

const google = window.google;

export class Splash extends Component {

  constructor(props) {
    super(props) 
  }

  componentDidMount() {
    const input = document.getElementById('searchbar');
    this.autocomplete = new google.maps.places.Autocomplete(input);
  }

  search(event) {
    const { setCenter, history } = this.props;
    event.preventDefault();
    if (this.autocomplete.getPlace()) {
      const location = this.autocomplete.getPlace().geometry.location;
      const latLng = {
        lat: location.lat(),
        lng: location.lng(),
      }
      setCenter(latLng);
      history.push('/main');
    }
  }

  render() {
    const { openModal, } = this.props;
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
            <form className="search-bar">
              <input className="searchbar" id='searchbar' placeholder="Find a Place To Rest Your Weary Bottom" />
              <i onClick={this.search.bind(this)} className="fas fa-search" />
            </form>
            <div className="splash-image-container">
              <img src="https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </div>
        </div>
    );
  }
}

const mDtP = dispatch => ({
  setCenter: center => dispatch(setCenter(center)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mDtP)(Splash);
