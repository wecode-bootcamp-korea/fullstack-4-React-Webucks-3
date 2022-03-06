import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoffeeCard.scss';
import ListDami from '../List';

function CoffeeCardDami({ data }) {
  const navigate = useNavigate();

  return (
    <div class="bigContainer" key={data.key}>
      <div class="imageFixed">
        <img
          onClick={() => {
            navigate('/coffee/ + {data.id}');
          }}
          alt={data.name}
          class="coffeeImage"
          src={data.imgURL}
        />
      </div>
      <div class="productName">{data.name}</div>
    </div>
  );
}

export default CoffeeCardDami;
