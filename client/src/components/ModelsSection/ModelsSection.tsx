import { Phone } from '../../types/Phone';
import { Loader } from '../Loader';
import { ProductsSwiper } from '../ProductsSwiper';

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
}) => (
  <section className="home__section-models">
    {!phones.length && <Loader />}
    <ProductsSwiper
      phones={phones}
      selectedPhones={selectedPhones}
      setSelectedPhones={setSelectedPhones}
      setPhoneId={setPhoneId}
      likedPhones={likedPhones}
      setLikedPhones={setLikedPhones}
      title="Brand new models"
    />
  </section>
);
