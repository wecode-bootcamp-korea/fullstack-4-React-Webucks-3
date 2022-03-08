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

  const nutriLeftBox = data.nutrition.slice(0, 3);
  const nutriRightBox = data.nutrition.slice(3, 7);
  const [like, setLike] = useState('unliked');

  const heartChange = () => {
    like === 'unliked' ? setLike('liked') : setLike('unliked');
  };

  console.log(like);

  // const likeHeart = () => {
  //   like == true ? :
  // }

  //선언
  return (
    <div className="detailDami">
      <TopnavDami />
      <h1 className="menuName">{data.category}</h1>
      <section className="menuTree">
        홈 > MENU > 음료 > 에스프레소 > {data.name}
      </section>
      <section className="productDesc">
        <img alt={data.name} className="detailImg" src={data.imgURL} />
        <section>
          <p className="productName"> {data.name} </p>
          <FontAwesomeIcon
            icon={faHeart}
            onClick={heartChange}
            // className={`${styles.fas} ${coffeeDetail.isLiked ? styles.liked : ''}`}/>
            className={like}
          />
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
              {nutriLeftBox.map(nutri => (
                <div class="nutriLeft">
                  <div className="nutriOneline">
                    {nutri.name}
                    <div className="nutriValue"> {nutri.amount} </div>
                  </div>
                </div>
              ))}
            </div>
            <section className="nutriBox2">
              {nutriRightBox.map(nutri => (
                <div class="nutriLeft">
                  <div className="nutriOneline">
                    {nutri.name}
                    <div className="nutriValue"> {nutri.amount} </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
          <section className="allergie">
            알레르기 유발 요인 :{' '}
            {data.allergie == 'none' || 'null' ? '없음' : data.allergie}
          </section>
          <section className="reviewSection">
            <div className="review">리뷰</div>
            <hr />
            {data.comments.map(review => (
              <div class="reviewLine">
                <p className="reviewId">{review.writer}</p>
                {review.comment}
              </div>
            ))}
            <input className="reviewBox" placeholder="리뷰를 입력해주세요." />
          </section>
        </section>
      </section>
      <FooterDami />
    </div>
  );
}

export default DetailDami;
