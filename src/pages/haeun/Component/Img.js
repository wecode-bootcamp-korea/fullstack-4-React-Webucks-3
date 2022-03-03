import React from 'react';

const Img = (props) => (
            <>
            <div className="imgDiv">
                <img src={props.img} 
                    alt="coffee"/>
            </div>
            <p>오늘의 커피 ♡</p>
            </>
    );

export default Img;