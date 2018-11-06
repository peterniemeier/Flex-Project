import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './footer.css';

export class Footer extends Component {
  render() {
    return <div className="footer">
        <Link className="link-style" to="/creators">
          Creators
        </Link>
        <Link className="link-style" to="/toilets">
          Home
        </Link>
        <a className="link-style" href="https://github.com/peterniemeier/Flex-Project">
          Source Code
        </a>
      </div>;
  }
}

export default Footer
