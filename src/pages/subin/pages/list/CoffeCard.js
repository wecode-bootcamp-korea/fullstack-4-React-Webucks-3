import React from 'react';
import { useNavigate } from 'react-router-dom';

function CoffeeCard({ data }) {
  const navigate = useNavigate();
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
    <div className="gridWrap" key={data.key}>
      <div
        className="overflow"
        onClick={() => {
          navigate(`/list-subin/${data.id}`);
        }}
      >
        <img className="coffeeImg" src={data.imgURL} alt={data.name} />
      </div>
      <p className="coffeeName">{data.name}</p>
      <i className="fa-regular fa-heart btnOff" onClick={handleHeartBtn} />
    </div>
  );
}

export default CoffeeCard;
