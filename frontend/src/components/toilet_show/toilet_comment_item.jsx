import React from 'react';


const ToiletCommentItem = ({comment}) => {
  let rating = [];
  for (let i = 0; i < comment.rating; i++) {
    rating.push(<i className="fas fa-toilet-paper" />);
  }
  return (
    <li className='toilet-comment-item'>
      <h1>{comment.creator}</h1>
      <div>
        <p>
          {comment.body}
        </p>
        <span>
          rating: {rating}
        </span>
      </div>
    </li>
  )
}

export default ToiletCommentItem;
