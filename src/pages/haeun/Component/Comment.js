import React from 'react';

const Comment = props => {
  return (
    <div>
      <p className="userName">{props.comment}</p>
    </div>
  );
};

export default Comment;
