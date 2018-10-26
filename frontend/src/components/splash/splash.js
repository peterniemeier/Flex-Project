import React, { Component } from 'react'

import '../../assets/stylesheets/shared.css';
import './splash.css';

export class Splash extends Component {

  search() {

  }

  render() {
    return <div className="splash-container">
        <form className="search-bar">
          <input className="searchbar" placeholder="Find a Place To Rest Your Weary Bottom" />
          <i onClick={this.search.bind(this)} className="fas fa-search" />
        </form>
        <div className="splash-image-container">
          <img src="https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
      </div>;
  }
}

export default Splash
