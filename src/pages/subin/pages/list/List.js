import React from 'react';
import TopNav from '../../components/nav/TopNav';
import './List.scss';

function List() {
  return (
    <div className="listSubin">
      <TopNav />

      {/* <!-- main --> */}
      <main>
        {/* <!-- section1 head --> */}
        <section className="listHead">
          <h3 className="listType">콜드 브루 커피</h3>
          <i className="fa-solid fa-mug-hot"></i>
          <p className="feature">
            디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
          </p>
        </section>

        {/* <!-- section1 grid --> */}
        <section className="listGrid">
          <div className="gridWrap">
            <div className="overflow" onClick={() => {}}>
              <img
                className="coffeeImg"
                src="/images/subin/coffee1.jpg"
                alt="나이트로 바닐라 크림"
              />
            </div>
            <p className="coffeeName">나이트로 바닐라 크림</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee2.jpg"
                alt="나이트로 콜드 브루"
              />
            </div>
            <p className="coffeeName">나이트로 콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee3.jpg"
                alt="돌체 콜드 브루"
              />
            </div>
            <p className="coffeeName">돌체 콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee4.jpg"
                alt="바닐라 크림 콜드 브루"
              />
            </div>
            <p className="coffeeName">바닐라 크림 콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>

          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee5.jpg"
                alt="벨벳 다크 모카 나이트로"
              />
            </div>
            <p className="coffeeName">벨벳 다크 모카 나이트로</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee6.jpg"
                alt="시그니처 더 블랙 콜드 브루"
              />
            </div>
            <p className="coffeeName">시그니처 더 블랙 콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee7.jpg"
                alt="제주 비자림 콜드 브루"
              />
            </div>
            <p className="coffeeName">제주 비자림 콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee8.jpg"
                alt="콜드 브루"
              />
            </div>
            <p className="coffeeName">콜드 브루</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee9.jpg"
                alt="콜드 브루 몰트"
              />
            </div>
            <p className="coffeeName">콜드 브루 몰트</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee10.jpg"
                alt="콜드 브루 오트 라떼"
              />
            </div>
            <p className="coffeeName">콜드 브루 오트 라떼</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
        </section>

        {/* <!-- section2 head --> */}
        <section className="listHead">
          <h3 className="listType">브루드 커피</h3>
          <i className="fa-solid fa-mug-hot"></i>
          <p className="feature">
            디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
          </p>
        </section>

        {/* <!-- section2 grid --> */}
        <section className="listGrid">
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee11.jpg"
                alt="아이스 커피"
              />
            </div>
            <p className="coffeeName">아이스 커피</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
          <div className="gridWrap">
            <div className="overflow">
              <img
                className="coffeeImg"
                src="/images/subin/coffee12.jpg"
                alt="오늘의 커피"
              />
            </div>
            <p className="coffeeName">오늘의 커피</p>
            <i className="fa-regular fa-heart btnOff"></i>
          </div>
        </section>
      </main>
    </div>
  );
}

export default List;
