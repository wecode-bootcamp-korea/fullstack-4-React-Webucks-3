import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Detail.scss';
import TopnavDami from '../Components/Nav/Topnav';
import FooterDami from '../Footer/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { TopnavDami } from "..Components/Nav/Topnav"

function DetailDami() {
  //선언할 때 필요한 재료들을 만들기
  const params = useParams();
  const [data, setData] = useState({
    id: 0,
    name: '',
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
    imgURL: '',
    category: '',
  });

  useEffect(() => {
    fetch(`/data/${params.id}.json`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);
  const n = params.id;

  //선언
  return (
    <div className="detailDami">
      <TopnavDami />
      <h1 className="menuName">{data.category}</h1>
      <section className="menuTree">
        `홈 > MENU > 음료 > 에스프레소 > {data.name}`
      </section>
      <section className="productDesc">
        <img alt={data.name} className="detailImg" src={data.imgURL} />
        <section>
          <p className="productName"> {data.name} </p>
          <FontAwesomeIcon id="like" icon={faHeart} />
          <div className="productEnglishName"> {data.EnglishName}</div>
          <hr className="boldLine" />
          <div className="menuDesc">{data.desc}</div>
          <hr />
          <div className="size">
            <p> 제품 영양 정보</p>
            <p>
              {data.size} <span>/</span> {data.volume}
            </p>
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
                  <p className="nutriValue">{data.nutrition[n].amount}</p>
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
          <section className="allergie">
            알레르기 유발 요인 : {data.allergie}
          </section>
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
      <FooterDami />
    </div>
  );
}

export default DetailDami;
