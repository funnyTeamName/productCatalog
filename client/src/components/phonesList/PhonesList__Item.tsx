import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ButtonClassModifier, ButtonClassType } from '../../enums/buttonEnum';
import { Button } from '../button/Button';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
};

export const PhonesListItem: React.FC<Props> = ({ phone }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  return (
    <div className="card">
      <Link to="/phoneInfo">
        <img
          src={`http://localhost:8080/${phone.image}`}
          className="card__img"
          alt="product"
        />
      </Link>

      <div className="card__description-content">
        <p className="card__product-title">
          {phone.name}
        </p>

        <p className="card__price">
          $
          {phone.price}

          <s className="card__price card__price--old">
            $
            {phone.fullPrice}
          </s>
        </p>

        <div className="card__decorative-line" />

        <div className="card__description">
          <div className="card__product-description">
            <span className="card__subtitle">
              Screen
            </span>

            <span className="card__features">
              {phone.screen}
            </span>
          </div>

          <div className="card__product-description">
            <span className="card__subtitle">
              Capacity
            </span>

            <span className="card__features">
              {phone.capacity}
            </span>
          </div>

          <div className="card__product-description">
            <span className="card__subtitle">
              RAM
            </span>

            <span className="card__features">
              {phone.ram}
            </span>
          </div>
        </div>

        <div className="card__buttons">
          <Button
            title="Add to cart"
            btnClassType={ButtonClassType.PRIMARY}
          />

          <Button
            btnClassType={ButtonClassType.SECONDARY}
            btnClassModifier={ButtonClassModifier.HEART}
            isActiveBtn={isActiveBtn}
            setIsActiveBtn={setIsActiveBtn}
          />
        </div>
      </div>
    </div>
  );
};
