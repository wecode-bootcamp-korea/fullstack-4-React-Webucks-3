import './Test.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import TopnavDami from '../Components/Nav/Topnav';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate();
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/coffeeList.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  //선언
  return (
    <div class="listDami">
      <div id="wrap">
        <TopnavDami />
        <header class="categoryHeader">
          <div className="coldBrew">
            콜드 브루 커피
            <FontAwesomeIcon id="coffeeIcon" icon={faMugHot} />
            <span className="coldBrewNoti">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
        </header>
        {/* 여기서부터 map 돌려서 리스트 뿌리기 */}
        <div className="imageSection">
          {coffeeList.map(coffeeSummary => {
            if (coffeeSummary.id < 9) {
              return (
                <div class="bigContainer">
                  <div class="imageFixed">
                    <img
                      onClick={() => {
                        navigate('/coffee' + coffeeSummary.id);
                      }}
                      alt="커피이미지"
                      class="coffeeImage"
                      src={coffeeSummary.imgURL}
                    />
                  </div>
                  <div class="productName">{coffeeSummary.name}</div>
                </div>
              );
            }
          })}
        </div>
        <header class="categoryHeader">
          <div className="coldBrew">
            브루드 커피
            <FontAwesomeIcon id="coffeeIcon" icon={faMugHot} />
            <span className="coldBrewNoti">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>
        </header>
        <div className="imageSectionTwo">
          {coffeeList.map(coffeeSummary => {
            if (coffeeSummary.id > 10) {
              return (
                <div class="bigContainer">
                  <div class="imageFixed">
                    <img
                      onClick={() => {
                        navigate('/coffee' + coffeeSummary.id);
                      }}
                      alt="커피이미지"
                      class="coffeeImage"
                      src={coffeeSummary.imgURL}
                    />
                  </div>
                  <div class="productName">{coffeeSummary.name}</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Test;
