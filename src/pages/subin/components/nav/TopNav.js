import React from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

function TopNav() {
  return (
    <div className="TopNavSubin">
      <header>
        <Link to="/" className="title">
          WeBucks
        </Link>
        <nav>
          <ul>
            {/* a 태그를 div로 임시 변경함 */}
            <li>
              <Link to="#" className="navMenu">
                COFFEE
              </Link>
            </li>
            <li>
              <Link to="#" className="navMenu">
                MENU
              </Link>
            </li>
            <li>
              <Link to="#" className="navMenu">
                STORE
              </Link>
            </li>
            <li>
              <Link to="#" className="navMenu">
                WHAT'S NEW
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default TopNav;
