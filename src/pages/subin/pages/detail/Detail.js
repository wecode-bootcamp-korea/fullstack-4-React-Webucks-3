import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import TopNav from '../../components/nav/TopNav';
import Footer from '../../components/footer/Footer';
import Heart from '../../components/heart/Heart';
import ReviewInputs from './ReviewInputs';
import Nutrition from './Nutrition';
import ReviewList from './ReviewList';
import './Detail.scss';

function Detail() {
  const params = useParams();
  const nextId = useRef(4);
  const [inputs, setInputs] = useState({
    writer: '',
    comment: '',
  });
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
  });
  const [reviews, setReviews] = useState(data.comments);

  useEffect(() => {
    fetch(`/data/${params.id}.json`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setReviews(res.comments);
      });
  }, []);

  const { writer, comment } = inputs;

  const inputChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const addReview = () => {
    const newRievew = {
      id: nextId.current,
      writer,
      comment,
    };
    setReviews([...reviews, newRievew]);
    setInputs({
      writer: '',
      comment: '',
    });
    nextId.current += 1;
  };

  const deleteReview = id => {
    setReviews(reviews.filter(review => review.id !== id));
  };

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
            <Heart />
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
              {data.nutrition.map(data => {
                return data.id < 4 && <Nutrition data={data} key={data.id} />;
              })}
            </div>
            <div className="nutriWrapper">
              {data.nutrition.map(data => {
                return data.id > 3 && <Nutrition data={data} key={data.id} />;
              })}
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
              {reviews.map(data => {
                return (
                  <ReviewList
                    data={data}
                    key={data.id}
                    onRemove={deleteReview}
                  />
                );
              })}
            </div>
            <ReviewInputs
              writer={writer}
              comment={comment}
              inputChange={inputChange}
              addReview={addReview}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
