import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './List.scss';
import CoffeeList from '../Component/CoffeeList';
import TopNavBar from '../Component/TopNavBar';

function ListJugnhoon() {
  const [coldbrew, setColdbrew] = useState([]);
  const [brewed, setBrewed] = useState([]);

  useEffect(() => {
    fetch('/data/coffeeList.json')
      .then(res => res.json())
      .then(data => {
        setColdbrew(data.filter(e => e.type === 'coldbrew'));
        setBrewed(data.filter(e => e.type === 'brewed'));
      });
  }, []);

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
      <CoffeeList coffeeList={coldbrew} />

      <section className="menuTitle">
        <h2 className="menu_1st">브루드 커피 </h2>
        <i className="fa-solid fa-mug-hot"></i>
        <h3 className="menual">
          디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
        </h3>
      </section>
      <CoffeeList coffeeList={brewed} />
    </div>
  );
}

export default ListJugnhoon;

/* <TopNavBar />
<section className="menuTitle">
<h2 className="menu_1st">콜드 브루 커피</h2>
<i className="fa-solid fa-mug-hot"></i>
<h3 className="menual">
  디카페인 에스프레소 샷 추가 가능(일부 음료 제외)
</h3>
</section>
<section className="menuColdBrew">
<Link to="/detail-junghoon" className="linkform">
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">나이트로 바닐라 크림 ♡</div>
</Link>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091844065.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">나이트로 콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133657016.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">돌체 콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">바닐라 크림 콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452556.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">벨벳 다크 모카 나이트로 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346334.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">시그니처 더 블랙 콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">제주 비자림 콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">콜드 브루 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">콜드 브루 몰트 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg"
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
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">아이스 커피 ♡</div>
</span>
<span>
  <div className="overflow">
    <img
      className="coffee_img"
      src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
      alt="coffee_img"
    />
  </div>
  <div className="coffee_name">오늘의 커피 ♡</div>
</span>
</section> 
*/
