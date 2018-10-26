import React from 'react';


const ToiletCommentItem = ({comment}) => {

  return (
    <li className='toilet-comment-item'>
      <h1>Creator: {comment.creator}</h1>
      <p>
        {comment.body}
      </p>
      <span>
        rating: {comment.rating}
      </span>
    </li>
  )
}

export default ToiletCommentItem;
