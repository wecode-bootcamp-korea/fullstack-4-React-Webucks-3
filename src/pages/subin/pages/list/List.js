import React, { useState, useEffect } from 'react';
import TopNav from '../../components/nav/TopNav';
import CoffeeCard from './CoffeCard';
import './List.scss';

function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/coffeeList.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);

  const coldBrew = data.filter(coffee => coffee.type === 'coldBrew');
  const brewed = data.filter(coffee => coffee.type !== 'coldBrew');

  return (
    <div className="listSubin">
      <TopNav />

      <main>
        {/* <!-- section1 head --> */}
        <section className="listHead">
          {data.length ? (
            <>
              <h3 className="listType">콜드 브루 커피</h3>
              <i className="fa-solid fa-mug-hot" />
              <p className="feature">
                디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
              </p>
            </>
          ) : (
            ''
          )}
        </section>

        {/* <!-- section1 grid --> */}
        <section className="listGrid">
          {data.length ? (
            coldBrew.map(coffee => {
              return <CoffeeCard data={coffee} key={coffee.id} />;
            })
          ) : (
            <p className="loadingMessage">로딩중입니다</p>
          )}
        </section>

        {/* <!-- section2 head --> */}
        <section className="listHead">
          {data.length ? (
            <>
              <h3 className="listType">브루드 커피</h3>
              <i className="fa-solid fa-mug-hot" />
              <p className="feature">
                디카페인 에스프레스 샷 추가 가능 (일부 음료 제외)
              </p>
            </>
          ) : (
            ''
          )}
        </section>

        {/* <!-- section2 grid --> */}
        <section className="listGrid">
          {data.length
            ? brewed.map(coffee => {
                return <CoffeeCard data={coffee} key={coffee.id} />;
              })
            : ''}
        </section>
      </main>
    </div>
  );
}

export default List;
