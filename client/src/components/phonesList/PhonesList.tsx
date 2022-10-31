import { Phone } from '../../types/Phone';
import { PhonesListItem } from './PhonesList__Item';

type Props = {
  phones: Phone[];
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  // temporary, for showing only 8/71 phones
  const phoness = phones.slice(0, 8);

  return (
    <div className="container">
      <div className="grid__cards">
        {phoness.map(phone => <PhonesListItem key={phone.id} phone={phone} />)}
      </div>
    </div>
  );
};
