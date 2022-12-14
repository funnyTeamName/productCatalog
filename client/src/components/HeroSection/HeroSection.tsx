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
            <picture>
              <source
                // eslint-disable-next-line max-len
                srcSet="https://product-catalog-server.onrender.com/img/banner-1mobile.jpg"
                media="(max-width: 500px)"
              />
              <img
                className="hero-swiper__img"
                // eslint-disable-next-line max-len
                src="https://product-catalog-server.onrender.com/img/banner-1.jpg"
                alt="slider"
              />
            </picture>
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="hero-swiper__img"
              src="https://product-catalog-server.onrender.com/img/banner-2.png"
              alt="slider"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="hero-swiper__img"
              src="https://product-catalog-server.onrender.com/img/banner-3.png"
              alt="slider"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
