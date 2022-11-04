import classNames from 'classnames';
import { PhonesListItem } from '../components/ProductList/ProductListItem';
import { ButtonClassModifier, ButtonClassType } from '../enums/ButtonEnum';
import { SliderButton } from '../images/icons/SliderButton';
import { Phone } from '../types/Phone';
import './SectionHero.scss';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
  size?: boolean;
  likedPhones: number[];
  setLikedPhones: (value: number[]) => void;
};

export const Home: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
  likedPhones,
  setLikedPhones,
}) => {
  const newModels = phones
    .sort((p1, p2) => p2.year - p1.year)
    .slice(0, 5);

  const cheapModels = phones
    .sort((p1, p2) => p1.price - p2.price)
    .slice(0, 5);

  return (
    <>
      <section className="home__section-hero section-hero">
        <h1
          className="
            main-title section-hero__title
            grid__item--mobile-1-8
            grid__item--pad-1-8
            "
        >
          Welcome to Nice Gadgets store!
        </h1>
        <img
          className="section-hero__img"
          src="http://localhost:8080/img/banner-accessories.png"
          alt="slider"
        />
        <ul className="section-hero__pagination">
          <li className="section-hero__item">
            <a
              href="/"
              className="section-hero__link"
              aria-label="link"
            >
              <SliderButton />
            </a>
          </li>
          <li className="section-hero__item">
            <a
              href="/"
              className="section-hero__link"
              aria-label="link"
            >
              <SliderButton />
            </a>
          </li>
          <li className="section-hero__item">
            <a
              href="/"
              className="section-hero__link"
              aria-label="link"
            >
              <SliderButton />
            </a>
          </li>
        </ul>
      </section>

      <section className="home__section-models product-slider">
        <div className="grid product-slider__grid-container container">
          <h2
            className="
              title
              product-slider__title
              grid__item--mobile-1-2
              grid__item--iPad-1-12
            "
          >
            Brand new models
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
          {newModels.map(phone => (
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

      <section className="home__section-category section-category container">
        <h2 className="title section-category__title">
          Shop by category
        </h2>
        <div className="section-category__baner-wrap">
          <div className="section-category__baner">
            <div
              className="section-category__img section-category__img--phones"
            />

            <h4 className="subtitle section-category__subtitle">
              <a href="/">
                Mobile phones
              </a>
            </h4>

            <p className="section-category__product-count">
              {`${phones.length} models`}
            </p>
          </div>

          <div className="section-category__baner">
            <div
              className="section-category__img section-category__img--tablets"
            />

            <h4 className="subtitle section-category__subtitle">
              <a href="/">
                Tablets
              </a>
            </h4>

            <p className="section-category__product-count">
              24 models
            </p>
          </div>

          <div className="section-category__baner">
            <div
              className="
                section-category__img
                section-category__img--accessories
              "
            />

            <h4 className="subtitle section-category__subtitle">
              <a href="/">
                Accessories
              </a>
            </h4>

            <p className="section-category__product-count">
              100 models
            </p>
          </div>
        </div>
      </section>

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
    </>
  );
};
