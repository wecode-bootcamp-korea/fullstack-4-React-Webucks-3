import React from 'react';
import Heart from '../../components/heart/Heart';

function ReviewList({ data, onRemove }) {
  return (
    <div className="aRv" key={data.id}>
      <span className="rvId">{data.writer}</span>
      <span className="rvText">{data.comment}</span>
      <Heart />
      <i
        onClick={() => {
          onRemove(data.id);
        }}
        className="fa-solid fa-trash-can"
      />
    </div>
  );
}

export default ReviewList;
