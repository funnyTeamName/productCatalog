import { ButtonClassModifier, ButtonClassType } from '../../enums/buttonEnum';
import { Button } from '../button/Button';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone;
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
};

export const PhonesListItem: React.FC<Props> = ({
  phone,
  selectedPhones,
  setSelectedPhones,
}) => {
  return (
    <div className="card">
      <a href="/">
        <img
          src={`http://localhost:8080/${phone.image}`}
          className="card__img"
          alt="product"
        />
      </a>

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
          {selectedPhones.includes(phone.id)
            ? (
              <Button
                title="Added to cart"
                btnClassType={ButtonClassType.PRIMARY}
                btnClassModifier={ButtonClassModifier.ADDED}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                phoneId={phone.id}
                type="cart"
              />
            )
            : (
              <Button
                title="Add to cart"
                btnClassType={ButtonClassType.PRIMARY}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                phoneId={phone.id}
                type="cart"
              />
            )}

          <Button
            btnClassType={ButtonClassType.SECONDARY}
            btnClassModifier={ButtonClassModifier.HEART}
            selectedPhones={selectedPhones}
            setSelectedPhones={setSelectedPhones}
            phoneId={phone.id}
            type="heart"
          />
        </div>
      </div>
    </div>
  );
};
