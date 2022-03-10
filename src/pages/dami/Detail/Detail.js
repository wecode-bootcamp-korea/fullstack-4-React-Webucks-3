import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './Detail.scss';
import TopnavDami from '../Components/Nav/Topnav';
import FooterDami from '../Footer/Footer';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateComment from './CreateComment';
import ReviewList from './ReviewList';
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

  // mission4 디테일페이지 좋아요 토글기능 추가
  const heartChange = () => {
    like === 'unliked' ? setLike('liked') : setLike('unliked');
  };
  //mission5 댓글 추가 기능 구현하기
  //리뷰 input박스에 넣는 내용 (writer와 comment)
  const [inputs, setInputs] = useState({
    writer: '',
    comment: '',
  });
  const { writer, comment } = inputs; //할당

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //현재 데이터에 새로운 리뷰를 추가 하기 위해 복사해서 세팅한 데이터 데이터
  const [review, setReview] = useState(data.comments);
  const nextId = useRef(4);

  const onCreate = () => {
    const newReview = {
      id: nextId.current,
      writer,
      comment,
    };
    setReview([...review, newReview]);
    setInputs({
      writer: '',
      comment: '',
    });
    nextId.current += 1;
  };

  console.log(review);

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
          <div class="nameNHeart">
            <p className="productName"> {data.name} </p>
            <FontAwesomeIcon
              icon={faHeart}
              onClick={heartChange}
              className={like}
            />
          </div>
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
                <div className="nutriLeft">
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
            {review.map(data => {
              return (
                <div className="reviewLine">
                  <ReviewList data={data} key={data.id} />
                  <button className="reviewEaraseBtn">삭 제</button>
                </div>
              );
            })}
            <div class="reviewInput">
              <CreateComment
                writer={writer}
                comment={comment}
                onChange={onChange}
                onCreate={onCreate}
              />
              {/* <button className="reviewBtn"> 작성하기 </button> */}
            </div>
          </section>
        </section>
      </section>
      <FooterDami />
    </div>
  );
}
//댓글을 적고 엔터를 눌렀을 때, 해당 input 내용의 최신내용을  배열에 저장하고 인풋창을 리셋
//  const reviewEnter = e => {
//   if (e.key === 'Enter') {
//     setReviewData(e.target.value);
//     updateReview(e.target.value);
//     e.target.value = '';
//   }
// };
export default DetailDami;
