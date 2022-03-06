import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Test.scss';
import TopnavDami from '../Components/Nav/Topnav';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Test() {
  const params = useParams();
  const [data, setData] = useState({
    id: 0,
    name: '나와야지임마',
    EnglishName: '',
    desc: '',
    size: '',
    volume: '',
    nutrition: [
      { id: 1, name: '1회 제공량 (kcal)', amount: 0 },
      { id: 2, name: '포화지방 (g)', amount: 0 },
      { id: 3, name: '단백질 (g)', amount: 0 },
      { id: 4, name: '나트륨 (mg)', amount: 0 },
      { id: 5, name: '당류 (g)', amount: 0 },
      { id: 6, name: '카페인 (mg)', amount: 0 },
    ],
    allergie: 'milk',
    comments: [
      { id: 1, writer: 'abcde', comment: '' },
      { id: 2, writer: 'fgerty', comment: '' },
      { id: 3, writer: 'fgerty', comment: '' },
    ],
    imgURL: './images/10.png',
  });

  useEffect(() => {
    fetch(`/data/${params.id}.json`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  //선언
  return (
    <div class="detailDami">
      <TopnavDami />
      <h1 className="menuName">콜드 브루</h1>
      <section className="menuTree">
        <p> 홈 > MENU > 음료 > 에스프레소 > {data.name}</p>
      </section>
      <section className="productDesc">
        <img
          alt="{data.name}"
          className="detailImg"
          src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
        />
        <section>
          <p className="productName"> {data.name} </p>
          <FontAwesomeIcon id="like" icon={faHeart} />
          <div className="productEnglishName"> White Chocolate Mocha </div>
          <hr className="boldLine" />
          <div className="menuDesc">
            달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와 섞어
            휘핑크림으로 마무리한 음료로
            <br />
            달콤함과 강렬한 에스프레소가 부드럽게 어우러진 커피
          </div>
          <hr />
          <div className="size">
            <p> 제품 영양 정보</p>
            <p> Tall(톨) / 355ml (12 fl oz) </p>
          </div>
          <hr />
          <section className="nutriTable">
            <div className="nutriBox1">
              <div className="nutriOneline">
                <p>1회 제공량 (kcal)</p>
                <p className="nutriValue"> 345 </p>
              </div>
              <div className="nutriOneline">
                <p> 포화지방(g) </p>
                <p className="nutriValue">11</p>
              </div>
              <div className="nutriOneline">
                <p> 단백질(g) </p>
                <p className="nutriValue">11</p>
              </div>
            </div>
            <section className="nutriBox2">
              <div className="nutrioneLine">
                <div className="nutriOneline">
                  <p> 나트륨 (mg) </p>
                  <p className="nutriValue">150</p>
                </div>
              </div>
              <div className="nutriOneline">
                <p> 당류 (g) </p>
                <p className="nutriValue">35</p>
              </div>
              <div className="nutriOneline">
                <p> 카페인 (mg) </p>
                <p className="nutriValue">75</p>
              </div>
            </section>
          </section>
          <section className="allergie">알레르기 유발 요인 : 우유</section>
          <section className="reviewSection">
            <div className="review">리뷰</div>
            <hr />
            <article className="reviewLine">
              <p className="reviewId">coffee_lover</p> 너무 맛있어요!
            </article>
            <article className="reviewLine">
              <p className="reviewId">CHOCO7</p> 오늘도 화이트 초콜릿 모카를
              마시러 갑니다.
            </article>
            <article className="reviewLine">
              <p className="reviewId">legend_dev</p> 진짜 화이트 초콜릿 모카는
              전설이다. 진짜 화이트 초콜릿 모카는 전설이다 <br /> 진짜 화이트
              초콜릿 모카는 전설이다.
            </article>
            <input className="reviewBox" placeholder="리뷰를 입력해주세요." />
          </section>
        </section>
      </section>
      <footer>
        <section className="footerTree">
          <ul>
            COMPANY
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>
          <ul>
            CORPORATE SALES
            <li>단체 및 기업 구매 안내</li>
          </ul>
          <ul>
            PARTNERSHIP
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
          <ul>
            ONLINE COMMUNITY
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
          <ul>
            RECRUIT
            <li>채용 소개</li>
            <li>채용 지원하기</li>
          </ul>
          <ul>WEBUCKS</ul>
        </section>
      </footer>
    </div>
  );
}

export default Test;
