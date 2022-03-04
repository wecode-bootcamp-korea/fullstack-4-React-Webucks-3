import React from 'react';

const Img = props => (
  <>
    <div className="imgDiv">
      <img src={props.imgURL} alt="coffee" />
    </div>
    <p>{props.name}</p>
  </>
);

export default Img;
