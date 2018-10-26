import React, { Component } from 'react'

import '../../assets/stylesheets/shared.css';
import './splash.css';

export class Splash extends Component {
  render() {
    return (
        <div className="splash-container">
            <img src="https://images.pexels.com/photos/127726/pexels-photo-127726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
    );
  }
}

export default Splash
