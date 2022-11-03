import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { ButtonClassModifier, ButtonClassType } from '../../enums/ButtonEnum';
// import './_pagination.scss';

type Props = {
  phonesPerPage: number,
  totalPhones?: number,
  paginate: (value: number) => void,
  currentPage: number,
  nextPage: () => void,
  prevPage: () => void,
};

export const Pagination: React.FC<Props> = ({
  phonesPerPage,
  totalPhones,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  const selectedPage = useLocation().pathname.split('/Phones/')[1] || 1;

  if (totalPhones) {
    const totalPages = Math.ceil(totalPhones / phonesPerPage);

    for (let i = 1; i <= totalPages; i += 1) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="page__pagination pagination">
      <a // eslint-disable-line jsx-a11y/anchor-has-content
        href={`#/Phones/${currentPage}`}
        aria-label="link"
        className={classNames(
          'pagination__prev-btn',
          ButtonClassType.SECONDARY,
          ButtonClassModifier.PREV_PAGE,
        )}
        onClick={prevPage}
      />

      <ul className="pagination__list">
        {pageNumbers.map(number => {
          return (
            <li
              className="pagination__page-number"
              key={number}
            >
              <a
                href={`#/Phones/${currentPage}`}
                className={classNames(
                  ButtonClassType.SECONDARY,
                  ButtonClassModifier.NUM_PAGE,
                  { 'pagination__active-button': (+selectedPage === number) },
                )}
                onClick={() => {
                  paginate(number);
                }}
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>

      <a // eslint-disable-line jsx-a11y/anchor-has-content
        href={`#/Phones/${currentPage}`}
        aria-label="link"
        className={classNames(
          'pagination__next-btn',
          ButtonClassType.SECONDARY,
          ButtonClassModifier.NEXT_PAGE,
        )}
        onClick={nextPage}
      />
    </div>
  );
};
