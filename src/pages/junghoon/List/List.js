import React from 'react';
import TopNavBar from '../Component/TopNavBar';
import { Link } from 'react-router-dom';

import './List.scss';

function ListJugnhoon() {
  return (
    <div className="ListJunghoon">
      <TopNavBar />
      <section className="menuTitle">
        <h2 className="menu_1st">콜드 브루 커피</h2>
        <i className="fa-solid fa-mug-hot"></i>
        <h3 className="menual">
          디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </h3>
      </section>
      <section className="menuColdBrew">
        <Link to="./Detail" className="linkform">
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/1.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">나이트로 바닐라 크림 ♡</div>
        </Link>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/2.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">나이트로 콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/3.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">돌체 콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/4.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">바닐라 크림 콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/5.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">벨벳 다크 모카 나이트로 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/6.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">시그니처 더 블랙 콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/7.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">제주 비자림 콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/8.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">콜드 브루 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/9.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">콜드 브루 몰트 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/10.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">콜드 브루 오트 라떼 ♡</div>
        </span>
      </section>
      <section className="menuTitle">
        <h2 className="menu_1st">브루드 커피 </h2>
        <i className="fa-solid fa-mug-hot"></i>
        <h3 className="menual">
          디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </h3>
      </section>
      <section className="menuColdBrew">
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/11.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">아이스 커피 ♡</div>
        </span>
        <span>
          <div className="overflow">
            <img
              className="coffee_img"
              src="./images/junghoon/list/12.png"
              alt="coffee_img"
            />
          </div>
          <div className="coffee_name">오늘의 커피 ♡</div>
        </span>
      </section>
    </div>
  );
}

export default ListJugnhoon;
