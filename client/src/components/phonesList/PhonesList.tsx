import { Phone } from '../../types/Phone';
import { Filter } from '../filter/filter';
import { PhonesListItem } from './PhonesList__Item';

type Props = {
  phones: Phone[] | null;
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  return (
    <div className="container">
      <Filter length={phones?.length} />

      <div className="grid__cards">
        {phones?.map(phone => <PhonesListItem key={phone.id} phone={phone} />)}
      </div>
    </div>
  );
};
