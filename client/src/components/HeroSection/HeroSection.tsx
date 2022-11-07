import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './HeroSection.scss';
import '../ProductsSwiper/ProductsSwiper.scss';

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

      <div className="hero-swiper-wrapper">
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation
          modules={[Pagination, Navigation]}
          className="hero-swiper"
        >
          <SwiperSlide>
            <img
              className="hero-swiper__img"
              src="http://localhost:8080/img/banner-1.jpg"
              alt="slider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero-swiper__img"
              src="http://localhost:8080/img/banner-2.png"
              alt="slider"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="hero-swiper__img"
              src="http://localhost:8080/img/banner-3.png"
              alt="slider"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div className="section-hero__slider-wrapper">
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
      </ul> */}
    </section>
  );
};
