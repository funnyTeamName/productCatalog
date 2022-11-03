import { useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { FilterType } from '../../enums/FilterType';
import { Phone } from '../../types/Phone';
import { Filter } from '../filter/filter';
import { PhonesListItem } from './PhonesList__Item';

type Props = {
  phones: Phone[];
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
};

function filterPhones(
  phones: Phone[],
  filterType: FilterType = FilterType.NEWEST,
): Phone[] {
  const visiblePhones = [...phones];

  visiblePhones.sort((p1, p2) => {
    switch (filterType) {
      case FilterType.ASC:
        return p1.price - p2.price;

      case FilterType.DESC:
        return p2.price - p1.price;

      case FilterType.OLDEST:
        return p1.year - p2.year;

      default:
      case FilterType.NEWEST:
        return p2.year - p1.year;
    }
  });

  return visiblePhones;
}

export const PhonesList: React.FC<Props> = ({
  phones,
  selectedPhones,
  setSelectedPhones,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [phonesPerPage, setPhonesPerPage] = useState(8);
  const [filterType, setFilterType] = useState<FilterType>(FilterType.NEWEST);

  const currentPhones = filterPhones(phones, filterType);

  const lastPhoneIndex = currentPage * phonesPerPage;
  const firstPhoneIndex = lastPhoneIndex - phonesPerPage;
  const visiblePhones = currentPhones.slice(firstPhoneIndex, lastPhoneIndex);

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
      <Filter
        length={phones?.length}
        filterType={filterType}
        handleFilterType={setFilterType}
        phonesPerPage={phonesPerPage}
        setPhonesPerPage={setPhonesPerPage}
        setCurrentPage={setCurrentPage}
      />

      <div className="grid__cards">
        {visiblePhones?.map(phone => (
          <PhonesListItem
            key={phone.id}
            phone={phone}
            selectedPhones={selectedPhones}
            setSelectedPhones={setSelectedPhones}
          />
        ))}
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
