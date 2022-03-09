import React from 'react';
import { useNavigate } from 'react-router-dom';
import './welcome.scss';

function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div className="welcomeWrapper">
        <h1>3TEAM</h1>
        <p>wecode fullstack 4th pre-course 3 team</p>
        <div className="members">
          <div className="member" onClick={() => navigate('./login-haeun')}>
            HAEUN
          </div>
          <div className="member" onClick={() => navigate('./login-dami')}>
            DAMI
          </div>
          <div className="member" onClick={() => navigate('./login-junghoon')}>
            JUNGHOON
          </div>
          <div className="member" onClick={() => navigate('./login-juno')}>
            JUNO
          </div>
          <div className="member" onClick={() => navigate('./login-subin')}>
            SUBIN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
