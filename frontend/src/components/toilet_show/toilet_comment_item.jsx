import React from 'react';


const ToiletCommentItem = ({comment}) => {

  return (
    <li>
      <h1>{comment.creator}</h1>
      <p>
        {comment.body}
      <br/>
        {comment.rating}
      </p>
    </li>
  )
}

export default ToiletCommentItem;
