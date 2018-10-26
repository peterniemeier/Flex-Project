import React, { Component } from 'react'
import { connect } from 'react-redux';

import '../../assets/stylesheets/shared.css';
import './splash.css'; 

import { setCenter } from '../../actions/map_actions';
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
      // debugger;
      setCenter(latLng);
      history.push('/main');
    }
  }

  render() {
    return <div className="splash-container">
        <form className="search-bar">
          <input className="searchbar" id='searchbar' placeholder="Find a Place To Rest Your Weary Bottom" />
          <i onClick={this.search.bind(this)} className="fas fa-search" />
        </form>
        <div className="splash-image-container">
          <img src="https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </div>;
  }
}

const mDtP = dispatch => ({
  setCenter: center => dispatch(setCenter(center)),
})

export default connect(null, mDtP)(Splash);
