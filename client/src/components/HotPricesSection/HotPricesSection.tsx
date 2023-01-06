import { Phone } from '../../types/Phone';
import 'swiper/css';
import { ProductsSwiper } from '../ProductsSwiper';
import { Loader } from '../Loader';

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
}) => (
  <section className="home__section-hot-prices">
    {!phones.length && <Loader />}
    <ProductsSwiper
      phones={phones}
      selectedPhones={selectedPhones}
      setSelectedPhones={setSelectedPhones}
      setPhoneId={setPhoneId}
      likedPhones={likedPhones}
      setLikedPhones={setLikedPhones}
      title="Hot prices"
    />
  </section>
);
