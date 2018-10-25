import React from 'react';
import Link from 'react-router-dom'

class ToiletShow extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   toilet_id: this.props.toilet._id
    //  rating: ''
    // body: ''
    // creator: this.props.user.id
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchToilet(this.props.match.params.toiletId);
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createToiletComment(this.state)
  }

  render() {
    if (!this.props.toilet) {
      return null;
    }
    return (
      <div>
        <div>
          {this.props.toilet.title}
          {this.props.toilet.address}
        </div>
        
      </div>
    )
  }
}


export default ToiletShow;
