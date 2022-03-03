import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import "./List.scss";
import TopnavDami from "../Components/Nav/Topnav";

function ListDami() {
  //선언할 때 필요한 재료들을 만들기

  //선언
  return (
    <div id="wrap">
     <TopnavDami />
      <header>
        <div className="coldBrew">
          콜드 브루 커피
          <FontAwesomeIcon icon={faMugHot} />
          <span className="coldBrewDes">
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </div>
      </header>
      <div className="imgSection">
        <div className="imageFirst">
          <div className="imageFixed">
            <img
              className="image"
              alt="나이트로 바닐라 크림 이미지"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg"
            />
          </div>
          <p className="coffeeName">나이트로 바닐라 크림</p>
        </div>
        <div className="imageSecond">
          <div className="imageFixed">
            <img alt="나이트로 콜드 브루"
              className="image"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg"
            />
          </div>
          <p className="coffeeName">나이트로 콜드 브루</p>
        </div>
        <div className="imageThird">
          <div className="imageFixed">
            <img alt="돌체 콜드 브루"
              className="image"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg"
            />
          </div>
          <p className="coffeeName">돌체 콜드 브루</p>
        </div>
        <div className="imageForth">
          <div className="imageFixed">
            <img
              className="image"
              alt="바닐라 크림 콜드 브루"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg"
            />
          </div>
          <p className="coffeeName">바닐라 크림 콜드 브루</p>
        </div>
      </div>
      <div className="imgSection">
        <div className="imageFirst">
          <div className="imageFixed">
            <img
              className="image"
              alt="벨벳 다크 모카 나이트로"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg"
            />
          </div>
          <p className="coffeeName">벨벳 다크 모카 나이트로</p>
        </div>
        <div className="imageSecond">
          <div className="imageFixed">
            <img
              className="image"
              alt="시그니처 더 블랙 콜드 브루"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg"
            />
          </div>
          <p className="coffeeName">시그니처 더 블랙 콜드 브루</p>
        </div>
        <div className="imageThird">
          <div className="imageFixed">
            <img
              className="image"
              alt="제주 비자림 콜드 브루"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg"
            />
          </div>
          <p className="coffeeName">제주 비자림 콜드 브루</p>
        </div>
        <div className="imageForth">
          <div className="imageFixed">
            <img
              className="image"
              alt="콜드 브루"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg"
            />
          </div>
          <p className="coffeeName">콜드 브루</p>
        </div>
      </div>
      <header>
        <div className="coldBrew">
          {" "}
          <span className="categoryBar"> 브루드 커피 </span>
          <FontAwesomeIcon icon={faMugHot} />
          <span className="coldBrewDes">
            {" "}
            디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
          </span>
        </div>
      </header>

      <div className="imgSection2">
        <div>
          <div className="imageFixed">
            <img
              className="imageFirst"
              id="imageIce"
              alt="아이스커피"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg"
            />
          </div>
          <p className="coffeeName">아이스 커피</p>
        </div>
        <div className="imageBrewd">
          <div className="imageFixed">
            <img
              id="imageToday"
              alt="오늘의 커피"
              src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg"
            />
          </div>
          <p className="coffeeName">오늘의 커피</p>
        </div>
      </div>
    </div>
  );
}

export default ListDami;