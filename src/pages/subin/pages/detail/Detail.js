import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../../components/nav/TopNav';
import Footer from '../../components/footer/Footer';
import './Detail.scss';

function Detail() {
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
      { id: 2, writer: 'fgerty', comment: '' },
    ],
    imgURL: '',
  });

  useEffect(() => {
    fetch(`/data/${params.id}.json`)
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  return (
    <div className="detailSubin">
      <TopNav />

      {/* <!-- subtitle - coffee type --> */}
      <section className="coffeeType">
        <h3>콜드 브루</h3>
        <p>홈 &gt; MENU &gt; 음료 &gt; 에스프레스 &gt; {data.name}</p>
      </section>

      {/* <!-- main --> */}
      <main>
        {/* <!-- coffee image --> */}
        <div className="coffeeImg">
          <img src={data.imgURL} alt={data.name} />
        </div>

        {/* <!-- description --> */}
        <div className="description">
          {/* <!-- coffee name section --> */}
          <section className="coffeeName">
            <h4>{data.name}</h4>
            <i className="fa-regular fa-heart btnOff" />
            <p className="engName">{data.EnglishName}</p>
          </section>
          <p className="explain">{data.desc}</p>

          {/* <!-- nutrition section --> */}
          <section className="nutriPreview">
            <p>제품 영양 정보</p>
            <p>
              {data.size} / {data.volume}
            </p>
          </section>
          <section className="nutriDetails">
            <div className="nutriWrapper">
              <div className="nutirContent">
                <p>{data.nutrition[0].name}</p>
                <p>{data.nutrition[0].amount}</p>
              </div>
              <div className="nutirContent">
                <p>{data.nutrition[1].name}(g)</p>
                <p>{data.nutrition[1].amount}</p>
              </div>
              <div className="nutirContent">
                <p>{data.nutrition[2].name}(g)</p>
                <p>{data.nutrition[2].amount}</p>
              </div>
            </div>
            <div className="nutriWrapper">
              <div className="nutirContent">
                <p>{data.nutrition[3].name}(g)</p>
                <p>{data.nutrition[3].amount}</p>
              </div>
              <div className="nutirContent">
                <p>{data.nutrition[4].name}(g)</p>
                <p>{data.nutrition[4].amount}</p>
              </div>
              <div className="nutirContent">
                <p>{data.nutrition[5].name}(g)</p>
                <p>{data.nutrition[5].amount}</p>
              </div>
            </div>
          </section>

          {/* <!-- allergic section --> */}
          <section className="allergic">
            {data.allergie
              ? `알러지 유발 요인 : ${data.allergie.toUpperCase()}`
              : `알러지 유발 요인 : 없음`}
          </section>

          {/* <!-- review section --> */}
          <section className="rvWrapper">
            <p className="rvTitle">리뷰</p>
            <div className="rvContents">
              <div className="aRv">
                <span className="rvId">coffeelover</span>
                <span className="rvText">너무 맛있어요!</span>
                <i className="fa-regular fa-heart btnOff" />
                <i className="fa-solid fa-trash-can" />
              </div>
            </div>
            <input
              type="text"
              className="rvInput"
              placeholder="리뷰를 입력해주세요."
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
