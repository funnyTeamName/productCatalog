import { SliderButton } from '../../images/icons/SliderButton';
import './HeroSection.scss';

export const HeroSection = () => {
  return (
    <section className="home__section-hero section-hero">
      <h1
        className="
        home__main-title
        section-hero__title
        grid__item--mobile-1-8
        grid__item--pad-1-8
        "
      >
        Welcome to Nice Gadgets store!
      </h1>

      <div className="section-hero__slider-wrapper">
        <button
          type="button"
          className="section-hero__btn"
        >
          x
        </button>

        <img
          className="section-hero__img"
          src="http://localhost:8080/img/banner-accessories.png"
          alt="slider"
        />

        <button
          type="button"
          className="section-hero__btn"
        >
          x
        </button>
      </div>

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
  );
};
