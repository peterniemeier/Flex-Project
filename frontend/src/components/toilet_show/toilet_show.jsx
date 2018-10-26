import React from 'react';

import '../../assets/stylesheets/shared.css';
import './toilet-show.css';

import {makeMapUrl} from '../../util/map_api_util';
import ToiletCommentItem from './toilet_comment_item';
import CommentForm from './comment_form';

class ToiletShow extends React.Component {

  componentDidMount() {
    this.props.fetchToilet(this.props.match.params.toiletId);
    this.props.fetchToiletComments(this.props.match.params.toiletId);
  }

  returnComments() {
    const comments = (
      <ul className='comments-list'>
        {this.props.toilet.comments.map((comment) => {
          return (
            <ToiletCommentItem
            comment={comment}
            />
            )
          })}
      </ul>
      )
    return comments;
  }

  render() {
    if (!this.props.toilet) {
      return null;
    }
    return <div className="all-content">
        <div className="static-map">
          <img src={makeMapUrl(this.props.toilet)} />
        </div>
        <div className="toilet-info">
          <h1>{this.props.toilet.title}</h1>
          <p>{this.props.toilet.address}</p>
        </div>
        {this.returnComments()}
        <CommentForm toiletId={this.props.toiletId} creator={this.props.creator}/>
      </div>;
  }
}


export default ToiletShow;
