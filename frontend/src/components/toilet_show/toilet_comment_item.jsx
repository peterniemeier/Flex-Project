import React from 'react';


const ToiletCommentItem = ({comment}) => {

  return (
    <li>
      <h1>{comment.creator} says...</h1>
      <p>
        {comment.body}
      <br/>
        I gave it a {comment.rating}
      </p>
    </li>
  )
}

export default ToiletCommentItem;
