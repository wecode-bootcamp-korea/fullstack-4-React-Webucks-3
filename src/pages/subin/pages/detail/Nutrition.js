import React from 'react';

function Nutrition({ data }) {
  return (
    <div className="nutirContent">
      <p>{data.name}</p>
      <p>{data.amount}</p>
    </div>
  );
}

export default Nutrition;
