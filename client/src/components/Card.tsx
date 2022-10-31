import { useState } from 'react';
import { ButtonClass } from '../enums/Enums';
import { Button } from './Button';

export const Card: React.FC = () => {
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  return (
    <div className="card">
      <img
        src="https://klike.net/uploads/posts/2018-06/1528718829_4.jpg"
        className="card__img"
        alt="product"
      />

      <div className="card__description-content">
        <p className="card__product-title">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>

        <p className="card__price">
          $999

          <s className="card__price card__price--old">
            $899
          </s>
        </p>

        <div className="card__decorative-line" />

        <div className="card__description">
          <div className="card__product-description">
            <span className="card__subtitle">
              Screen
            </span>

            <span className="card__features">
              6.1” OLED
            </span>
          </div>

          <div className="card__product-description">
            <span className="card__subtitle">
              Capacity
            </span>

            <span className="card__features">
              128 GB
            </span>
          </div>

          <div className="card__product-description">
            <span className="card__subtitle">
              RAM
            </span>

            <span className="card__features">
              6 GB
            </span>
          </div>
        </div>

        <div className="card__buttons">
          <Button
            title="Add to cart"
            btnClass={ButtonClass.PRIMARY}
          />

          <Button
            btnClass={ButtonClass.SECONDARY}
            isActiveBtn={isActiveBtn}
            setIsActiveBtn={setIsActiveBtn}
          />
        </div>
      </div>
    </div>
  );
};
