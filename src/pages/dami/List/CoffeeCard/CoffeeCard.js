import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CoffeeCard.scss';

function CoffeeCardDami({ coffeeSummary }) {
  const navigate = useNavigate();

  return (
    <div class="bigContainer">
      <div class="imageFixed">
        <img
          onClick={() => {
            navigate('/coffee/' + coffeeSummary.id);
          }}
          alt={coffeeSummary.name}
          class="coffeeImage"
          src={coffeeSummary.imgURL}
        />
      </div>
      <div class="productName">{coffeeSummary.name}</div>
    </div>
  );
}

export default CoffeeCardDami;
