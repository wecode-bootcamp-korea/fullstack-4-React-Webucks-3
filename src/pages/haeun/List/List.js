import React from 'react';
import './List.scss';
import Topnav from '../Component/TopNav';

function List() {
  return (
    <div class="listHaeun">
      <div className="container">
        {/* Webucks + menu */}
        <Topnav />
        <div className="productList">
          <div className="coldBrew">
            <div className="type">
              <p className="name">콜드 브루 커피</p>
              <p>☕️</p>
              <p className="detail">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </div>
            <div className="menuList">
              <ul>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490__480.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864__480.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/03/17/10/29/coffee-2151200_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/05/31/10/54/coffee-791045__480.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2021/07/13/18/58/coffee-6464307_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2015/05/31/10/54/coffee-791045__480.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>나이트로 바닐라 크림♡</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="brewed">
            <div className="type">
              <p className="name">브루드 커피</p>
              <p>☕️</p>
              <p className="detail">
                디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
              </p>
            </div>
            <div className="menuList">
              <ul>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>오늘의 커피♡</p>
                </li>
                <li>
                  <div className="imgDiv">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg"
                      alt="coffee image"
                    />
                  </div>
                  <p>오늘의 커피♡</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
