import React from 'react';
import './Topnav.scss';

function Topnav() {
    return (
        <div className="head">
            <h3 id="logo">Webucks</h3>
            <ul className="list">
                <li>COFFEE</li>
                <li>MENU</li>
                <li>STORE</li>
                <li>WHAT'S NEW</li>
            </ul>
        </div>
    );
};

export default Topnav;