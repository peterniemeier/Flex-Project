import React from 'react';
import Link from 'react-router-dom'
import ToiletCommentItem from './toilet_comment_item';

class ToiletShow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: '',
      body: '',
      creator: this.props.creator.username,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    debugger;
    this.props.fetchToilet(this.props.match.params.toiletId);
    this.props.fetchToiletComments(this.props.match.params.toiletId);
  }

  update(field) {
    console.log(this.state)
    return(e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createToiletComment(this.state).then(() => console.log('success'))
  }

  returnComments() {

    const comments = this.props.toilet.comments.map((comment) => {
      return (
        <ToiletCommentItem
          comment={comment}
          />
      )
    })
    return comments;
  }




  render() {
    if (!this.props.toilet) {
      return null;
    }
    this.state.toilet_id = this.props.toilet._id;

    return (
      <div>
        <div>
          {this.props.toilet.title}
          {this.props.toilet.address}
        </div>
        <ul>
          {this.returnComments()}
        </ul>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Comments"
            value={this.state.body}
            onChange={this.update('body')}
            />

          <div>
            1
            <input type="radio" name="rating" value="1" onChange={this.update('rating')} />
            2
            <input type="radio" name="rating" value="2" onChange={this.update('rating')} />
            3
            <input type="radio" name="rating" value="3" onChange={this.update('rating')} />
            4
            <input type="radio" name="rating" value="4" onChange={this.update('rating')} />
            5
            <input type="radio" name="rating" value="5" onChange={this.update('rating')} />

          </div>

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
