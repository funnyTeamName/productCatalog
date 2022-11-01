import { useState } from 'react';
import { Phone } from '../../types/Phone';
import { Pagination } from '../pagination/Pagination';
import { PhonesListItem } from './PhonesList__Item';

type Props = {
  phones: Phone[] | null;
};

export const PhonesList: React.FC<Props> = ({ phones }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);

  const lastPhoneIndex = currentPage * phonesPerPage;
  const firstPhoneIndex = lastPhoneIndex - phonesPerPage;
  const currentPhones = phones?.slice(firstPhoneIndex, lastPhoneIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (phones && lastPhoneIndex < phones.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (phones && firstPhoneIndex > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="container">
      <div className="grid__cards">
        {currentPhones?.map(phone => (
          <PhonesListItem key={phone.id} phone={phone} />))}
      </div>

      <Pagination
        phonesPerPage={phonesPerPage}
        totalPhones={phones?.length}
        paginate={paginate}
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
};
