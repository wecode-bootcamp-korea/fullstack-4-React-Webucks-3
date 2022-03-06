import './List.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import TopnavDami from '../Components/Nav/Topnav';
import CoffeeCardDami from './CoffeeCard/CoffeeCard';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ListDami() {
  const navigate = useNavigate();
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/coffeeList.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  const coldBrewType = coffeeList.filter(
    coffeeSummary => coffeeSummary.type === 'coldBrew'
  );
  const brewedType = coffeeList.filter(
    coffeeSummary => coffeeSummary.type === 'brewed'
  );

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
          {coldBrewType.map(coffeeSummary => (
            <CoffeeCardDami coffeeSummary={coffeeSummary} />
          ))}
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
          {brewedType.map(coffeeSummary => (
            <CoffeeCardDami coffeeSummary={coffeeSummary} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListDami;
