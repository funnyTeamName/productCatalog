import { Phone } from '../../types/Phone';
import { CategorySection } from '../CategorySection';
import { HeroSection } from '../HeroSection';
import { ModelsSection } from '../ModelsSection';
import { HotPricesSection } from '../HotPricesSection';
import './HomePage.scss';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  setPhoneId: (value: number) => void;
};

export const Home: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
  setPhoneId,
}) => {
  return (
    <>
      <HeroSection />

      <ModelsSection
        phones={phones}
        selectedPhones={selectedPhones}
        setSelectedPhones={setSelectedPhones}
        setPhoneId={setPhoneId}
      />

      <CategorySection phones={phones} />

      <HotPricesSection
        phones={phones}
        selectedPhones={selectedPhones}
        setSelectedPhones={setSelectedPhones}
        setPhoneId={setPhoneId}
      />
    </>
  );
};
