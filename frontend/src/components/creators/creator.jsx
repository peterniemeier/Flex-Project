import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Creator extends Component {
  render() {
    const {creator} = this.props
    return (
        <li className='creator'>
            <img scr={creator.imgUrl}></img>
            <Link to={creator.github}>Github</Link>
            <Link to={creator.angel}>Angel List</Link>
            <Link to={creator.linkedin}>Linked In</Link>
        </li>
    )
  }
}

export default Creator
