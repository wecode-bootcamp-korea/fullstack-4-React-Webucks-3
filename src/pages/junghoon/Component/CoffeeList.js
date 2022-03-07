/* eslint-disable jsx-a11y/alt-text */
import { useNavigate } from 'react-router-dom';
import './CoffeeList.scss';

function CoffeeList({ coffeeList }) {
  const navigator = useNavigate();
  return (
    <section className="menuColdBrew">
      {coffeeList.map(coffeeSummary => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div
            onClick={() => {
              navigator(`/list-junghoon/${coffeeSummary.id}`);
            }}
          >
            <div>
              <img src={coffeeSummary.imgURL} />
            </div>
            <span className="coffeeName">{coffeeSummary.name}</span>
          </div>
        );
      })}
    </section>
  );
}

export default CoffeeList;
