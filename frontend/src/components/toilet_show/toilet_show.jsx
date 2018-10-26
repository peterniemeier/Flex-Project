import React from 'react';
// import { Link } from 'react-router-dom';

import '../../assets/stylesheets/shared.css';
import './toilet-show.css';

import {makeMapUrl} from '../../util/map_api_util';
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
    this.props.fetchToilet(this.props.match.params.toiletId);
  }

  update(field) {
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
    let avgRating = '';
    if (this.props.toilet.ratingsSum != NaN) {
      avgRating = this.props.toilet.ratingsSum / 2
    }


    this.state.toilet_id = this.props.toilet._id;

    return <div className="all-content">
        <div className="static-map">
          <img src={makeMapUrl(this.props.toilet)} />
        </div>
        <div className="toilet-info">
          <h1>{this.props.toilet.title}</h1>
          <p>{avgRating}</p>
          <p>{this.props.toilet.address}</p>
        </div>
        <ul>
          {this.returnComments()}
        </ul>

        <form className="comment-form" onSubmit={this.handleSubmit}>
          <textarea className="input-text comment-textarea" placeholder="Add Comment" value={this.state.body} onChange={this.update("body")} />

          <div className="ratings">
            <h2>Rating</h2>
            <label>
              {" "}
              <span>1</span>
              <input type="radio" name="rating" value="1" onChange={this.update("rating")} />
            </label>
            <label>
              {" "}
              <span>2</span>
              <input type="radio" name="rating" value="2" onChange={this.update("rating")} />
            </label>
            <label>
              {" "}
              <span>3</span>
              <input type="radio" name="rating" value="3" onChange={this.update("rating")} />
            </label>
            <label>
              {" "}
              <span>4</span>
              <input type="radio" name="rating" value="4" onChange={this.update("rating")} />
            </label>
            <label>
              {" "}
              <span>5</span>
              <input type="radio" name="rating" value="5" onChange={this.update("rating")} />
            </label>
          </div>

          <input className="btn btn-secondary btn-m" type="submit" value="Add Comment" />
        </form>

      </div>;
  }
}


export default ToiletShow;
