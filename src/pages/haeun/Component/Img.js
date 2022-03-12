import React from 'react';

const Img = props => (
  <>
    <div>
      <img src={props.imgURL} alt="coffee" />
    </div>
    <p className="coffee-name">{props.name}</p>
  </>
);

export default Img;
