import React from 'react';
import './Heart.scss';

function Heart() {
  const handleHeartBtn = e => {
    const { classList } = e.target;
    if (classList.contains('btnOff')) {
      classList.replace('btnOff', 'btnOn');
      classList.replace('fa-regular', 'fa-solid');
    } else {
      classList.replace('btnOn', 'btnOff');
      classList.replace('fa-solid', 'fa-regular');
    }
  };

  return (
    <i
      className="fa-regular fa-heart btnOff heartSubin"
      onClick={handleHeartBtn}
    />
  );
}

export default Heart;
