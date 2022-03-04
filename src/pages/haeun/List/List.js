import React, { useEffect, useState } from 'react';
import './List.scss';
import Topnav from '../Component/TopNav';
import Img from '../Component/Img';

function List() {
  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/coffeeListHaeun.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setImgList(data);
      });
  }, []);

  return (
    <div className="listHaeun">
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
                {imgList.map(coffeeImg => {
                  return (
                    <li key={coffeeImg.id}>
                      <Img img={coffeeImg.imgURL} name={coffeeImg.name} />
                    </li>
                  );
                })}
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
              <ul></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
