import React from 'react';

function ReviewList({ data }) {
  return (
    <div className="reviewLine" key={data.id}>
      <span className="reviewId">{data.writer}</span>
      {data.comment}
    </div>
  );
}
// {data.comments.map(review => (
//   <div className="reviewLine">
//     <p className="reviewId">{review.writer}</p>
//     {review.comment}

export default ReviewList;
