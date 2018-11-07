import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Creator extends Component {
  render() {
    const {creator} = this.props
    return <li>
        <a href={creator.portfolio}>
            <h2>{creator.name}</h2>
            <img src={creator.imgUrl} />
        </a>
        <div className="external-links">
          <a href={creator.github}>
                <i className="fab fa-github" />
          </a>
            <a href={creator.angel}>
                <i class="fab fa-angellist"></i></a>
            <a href={creator.linkedin}>
                <i class="fab fa-linkedin"></i></a>
        </div>
      </li>;
  }
}

export default Creator
