import React from 'react';
import './Detail.scss';
import Topnav from '../Component/TopNav';

function Detail() {
  return (
    <div class="detailHaeun">
      <div className="detailPage">
        <div className="container">
          {/* header */}
          <Topnav />
          {/* content */}
          <div className="content">
            <h2>콜드 브루</h2>
            <p className="breadCrumb">
              홈 MENU 음료 에스프레소 화이트 초콜릿 모카
            </p>
            <div className="infoBox">
              <div className="detailImg">
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/31/15/18/coffee-6984075_1280.jpg"
                  alt="coffee image"
                />
              </div>
              <div className="info">
                {/* name, description, nutritions, review */}
                <div className="name">
                  <div>
                    <h3>화이트 초콜릿 모카</h3>
                    <p>White Chocolate Mocha</p>
                  </div>
                  <div className="heart">
                    <i className="fa-regular fa-heart heartIcon"></i>
                  </div>
                </div>
                <div className="description">
                  <p>
                    달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소 스팀
                    밀크와 섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한
                    에스프레소가 부드럽게 어우러진 커피
                  </p>
                </div>
                <div className="nutritions">
                  <div className="nutritionHead">
                    <h2>제품 영양 정보</h2>
                    <h2 id="size">Tall(톨) / 355ml (12 fl oz)</h2>
                  </div>
                  <div className="nutritionDetail">
                    <div className="firstSection">
                      <ul className="nutritionName">
                        <li>1회 제공량 (kcal)</li>
                        <li>포화지방 (g)</li>
                        <li>단백질 (g)</li>
                      </ul>
                      <ul className="amount">
                        <li>345</li>
                        <li>11</li>
                        <li>11</li>
                      </ul>
                    </div>
                    <div className="secondSection">
                      <ul className="nutritionName">
                        <li>나트륨 (mg)</li>
                        <li>당류 (g)</li>
                        <li>카페인 (mg)</li>
                      </ul>
                      <ul className="amount">
                        <li>150</li>
                        <li>35</li>
                        <li>75</li>
                      </ul>
                    </div>
                  </div>
                  <div className="allergy">알레르기 유발 요인 : 우유</div>
                </div>
                <div className="review">
                  <h2>리뷰</h2>
                  <ul>
                    <li>
                      <p className="userName">coffee_lover</p> 너무 맛있어요
                    </li>
                    <li>
                      <p className="userName">CHOCO7</p> 오늘도 화이트 초콜릿
                      모카를 마시러 갑니다.
                    </li>
                    <li>
                      <p className="userName">legend_dev</p> 진짜 화이트 초콜릿
                      모카는 전설이다. 진짜 화이트 초콜릿 모카는 전설이다. 진짜
                      화이트 초콜릿 모카는 전설이다.
                    </li>
                  </ul>
                  <input
                    id="commentInput"
                    type="text"
                    placeholder="리뷰를 입력해주세요."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <ul>
            <li>COMPANY</li>
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>
          <ul>
            <li>CORPORATE SALES</li>
            <li>단체 및 기업 구매 안내</li>
          </ul>
          <ul>
            <li>PARTNERSHIP</li>
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
          <ul>
            <li>ONLINE COMMUNITY</li>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
          <ul>
            <li>RECRUIT</li>
            <li>제품 소개</li>
            <li>채용 지원하기</li>
          </ul>
          <ul>
            <li>WEBUCKS</li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Detail;
