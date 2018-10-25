import React, { Component } from 'react'

export class ToiletIndexItem extends Component {

  handleClick() {
    this.props.history.push(`/main/${this.props.toilet._id}`);
  }

  render() {
    const { toilet } = this.props;
    return (
      <li onClick={this.handleClick.bind(this)} className='index-item'>
        <strong>{toilet.title}</strong>
        <p>{toilet.address}</p>
      </li>
    )
  }
}

export default ToiletIndexItem
