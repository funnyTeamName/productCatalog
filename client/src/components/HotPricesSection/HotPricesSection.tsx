import classNames from 'classnames';
import { ButtonClassModifier, ButtonClassType } from '../../enums/ButtonEnum';
import { Phone } from '../../types/Phone';
import { PhonesListItem } from '../ProductList';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
  likedPhones: number[];
  setLikedPhones: (value: number[]) => void;
};

export const HotPricesSection: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
  likedPhones,
  setLikedPhones,
}) => {
  const cheapModels = phones
    .sort((p1, p2) => p1.price - p2.price)
    .slice(0, 5);

  return (
    <section className="home__section-hot-prices product-slider">
      <div className="grid product-slider__grid-container container">
        <h2
          className="
          title
          product-slider__title
          grid__item--mobile-1-2
          grid__item--iPad-1-12
        "
        >
          Hot prices
        </h2>

        <div
          className="
          product-slider__button-wrapper
          product-slider__button-wrapper--position
        "
        >
          <a // eslint-disable-line jsx-a11y/anchor-has-content
            href="/"
            aria-label="link"
            className={classNames(
              'grid__item--mobile-5-6',
              'home-button-slider',
              ButtonClassType.SECONDARY,
              ButtonClassModifier.PREV_PAGE,
            )}
          />

          <a // eslint-disable-line jsx-a11y/anchor-has-content
            href="/"
            aria-label="link"
            className={classNames(
              'grid__item--mobile-7-8',
              'home-button-slider',
              ButtonClassType.SECONDARY,
              ButtonClassModifier.NEXT_PAGE,
            )}
          />
        </div>
      </div>

      <div className="product-slider-cards">
        {cheapModels.map(phone => (
          <div className="product-slider-cards__item">
            <PhonesListItem
              key={phone.id}
              phone={phone}
              selectedPhones={selectedPhones}
              setSelectedPhones={setSelectedPhones}
              setPhoneId={setPhoneId}
              likedPhones={likedPhones}
              setLikedPhones={setLikedPhones}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
