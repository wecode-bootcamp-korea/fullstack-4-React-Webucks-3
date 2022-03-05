import React from 'react';
import { useNavigate } from 'react-router-dom';
import Heart from '../../components/heart/Heart';

function CoffeeCard({ data }) {
  const navigate = useNavigate();

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
      <Heart />
    </div>
  );
}

export default CoffeeCard;
