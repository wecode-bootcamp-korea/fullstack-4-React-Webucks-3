import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TopNavBar from '../Component/TopNavBar';

import './Detail.scss';

function DetailJugnhoon() {
  const params = useParams();

  const [coffeeDetail, setCoffeeDetail] = useState({
    id: 0,
    name: '',
    EnglisName: '',
    desc: '',
    size: '',
    volume: '',
    nutrition: [],
    allergie: '',
    conments: [],
    imgURL: 'http://000',
  });

  useEffect(() => {
    fetch(`/data/${params.id}.json`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCoffeeDetail(data);
      });
  }, []);

  return (
    <div className="DetailJunghoon">
      <TopNavBar />
    </div>
  );
}

export default DetailJugnhoon;

/*
==========detail==========
<div>
<section className="main">
  <section className="titleBar">
    <span className="coffeeName">
      <h2>콜드 브루</h2>
    </span>
  </section>
  <span className="minNav">
    홈 > MENU > 음료 > 에스프레소 > 나이트로 바닐라 크림
  </span>

  <section className="mainform">
    <span className="coffeeImg">
      <img src="../images/junghoon/list/1.png" alt="coffee_img" />
    </span>

    <span className="coffeeTextForm">
      <div className="coffeeNameBar">
        <div className="coffeeText">
          <h2>나이트로 바닐라 크림</h2>
          <div>Nitro Vanilla Cream</div>
        </div>
        <div className="icon">
          <i className="fa-regular fa-heart"></i>
        </div>
      </div>
      <span className="coffeeText2">
        <h5>
          부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에
          느껴보세요!
        </h5>
      </span>

      <div className="coffeeText3">
        <h3>제품 영양 정보</h3>
        <div>
          <h3>Tall(톨) / 355ml (12 fl oz)</h3>
        </div>
      </div>

      <div className="content">
        <div className="left">
          <div className="left1">
            <h5>1회 지공량 (kacl)</h5>
            <h5>345</h5>
          </div>
          <div className="left1">
            <h5>포화지방 (g))</h5>
            <h5>11</h5>
          </div>
          <div className="left1">
            <h5>단백질 (g)</h5>
            <h5>11</h5>
          </div>
        </div>

        <div className="right">
          <div className="right1" height="30px">
            <h5>나트륨 (mg)</h5>
            <h5>150</h5>
          </div>
          <div className="right1">
            <h5>당류 (g))</h5>
            <h5>35</h5>
          </div>
          <div className="right1">
            <h5>카페인 (mg)</h5>
            <h5>75</h5>
          </div>
        </div>
      </div>
      <div className="allergy">알레르기 유발 요인 : 우유</div>

      <div className="review">
        <h3>리뷰</h3>
      </div>
      <div className="reviewText">
        <span>coffee_lover </span> 너무 맛있어요!
        <div>
          <span>CHOCO7</span> 오늘도 마시러 갑니다
        </div>
        <div>
          <span className="userid">egend_dev</span> 진짜 너무 맛있어요
          ㅠㅠ
        </div>
      </div>
      <input
        className="reviewinput"
        type="text"
        placeholder="리뷰를 입력해주세요."
      />
    </span>
  </section>
</section>
<section className="footer">
  <div className="one">
    <div>COMPANY</div>
    <div>한눈에 보기</div>
    <div>스타벅스 사명</div>
    <div>스타벅스 소개</div>
    <div>국내 뉴스룸</div>
    <div>세계의 스타벅스</div>
    <div>글로벌 뉴스룸</div>
  </div>

  <div className="tow">
    <div>CORPORATE SALES</div>
    <div>단체 및 기업 구매 안내</div>
  </div>

  <div className="thr">
    <div>PARTNERSHIP</div>
    <div>신규 입점 제의</div>
    <div>협력 고객사 등록 신청</div>
  </div>

  <div className="four">
    <div>ONLINE COMMUNITY</div>
    <div>페이스북</div>
    <div>트위터</div>
    <div>유튜브</div>
    <div>블로그</div>
    <div>인스타그램</div>
  </div>
  <div className="fiv">
    <div>RECRUIT</div>
    <div>채용 소개</div>
    <div>채용 지원하기</div>
  </div>
  <div className="six">
    <div>WEBUCKS</div>
  </div>
</section>
</div>

*/
