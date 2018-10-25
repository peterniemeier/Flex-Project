import React from 'react';
import Link from 'react-router-dom'

class ToiletShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.toilet;
  }

  componentDidMount() {
    this.props.fetchToilet(this.props.match.params.toiletId);
    this.props.fetchToiletComments();
  }


  render() {
    return (
      <div>
        {this.state.title}
        <form>

        </form>
      </div>
    )
  }
}


export default ToiletShow;
