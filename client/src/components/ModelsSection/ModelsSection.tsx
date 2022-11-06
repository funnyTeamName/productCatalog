import {
  Navigation,
  Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { PhonesListItem } from '../ProductList/ProductListItem';
import { Phone } from '../../types/Phone';
import './ModelsSection.scss';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
  likedPhones: number[];
  setLikedPhones: (value: number[]) => void;
};

export const ModelsSection: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
  likedPhones,
  setLikedPhones,
}) => {
  const newModels = phones.sort((p1, p2) => p2.year - p1.year);

  return (
    <section className="home__section-models product-slider">
      <div className="product-slider__container">
        <h2
          className="title product-slider__title
        "
        >
          Brand new models
        </h2>

        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          loop
          loopFillGroupWithBlank
          navigation
          modules={[Pagination, Navigation]}
          breakpoints={{
            1200: { slidesPerView: 4 },
            1150: { slidesPerView: 4.5 },
            1024: { slidesPerView: 4.1 },
            900: { slidesPerView: 3.5 },
            768: { slidesPerView: 2.9 },
            580: { slidesPerView: 2.5 },
            500: { slidesPerView: 2.2 },
            420: { slidesPerView: 1.9 },
            375: { slidesPerView: 1.6 },
            320: { slidesPerView: 1.4 },
          }}
        >
          {newModels.map(phone => (
            <SwiperSlide>
              <PhonesListItem
                key={phone.id}
                phone={phone}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                setPhoneId={setPhoneId}
                likedPhones={likedPhones}
                setLikedPhones={setLikedPhones}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
