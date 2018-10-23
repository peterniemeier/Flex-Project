import React from 'react';
import Link from 'react-router-dom'

class ToiletShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchToilet(this.props.match.params.toiletId);
  }

  render() {
    return (
      <h1>Hi</h1>
    )
  }
}


export default ToiletShow;
