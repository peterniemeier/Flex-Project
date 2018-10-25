import React from 'react';
import Link from 'react-router-dom'

class ToiletShow extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   comment:
    //  rating:
    // user_id:
    // }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchToilet(this.props.match.params.toiletId);
    this.props.fetchToiletComments();
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
    return (
      <div>
        {this.props.toilet.title}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Comments"
            value={this.state.comment}
            onChange={this.update('comment')}
            />

          <input
            type="submit"
            value="Add Comment"
            />
        </form>
      </div>
    )
  }
}


export default ToiletShow;
