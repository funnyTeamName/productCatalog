import { Phone } from '../../types/Phone';
import './CategorySection.scss';

type Props = {
  phones: Phone[];
};

export const CategorySection: React.FC<Props> = ({ phones }) => {
  return (
    <section className="home__section-category section-category container">
      <h2 className="title section-category__title">
        Shop by category
      </h2>
      <div className="section-category__baner-wrap">
        <div className="section-category__baner">
          <div
            className="section-category__img section-category__img--phones"
          />

          <h4 className="subtitle section-category__subtitle">
            <a href="/">
              Mobile phones
            </a>
          </h4>

          <p className="section-category__product-count">
            {`${phones.length} models`}
          </p>
        </div>

        <div className="section-category__baner">
          <div
            className="section-category__img section-category__img--tablets"
          />

          <h4 className="subtitle section-category__subtitle">
            <a href="/">
              Tablets
            </a>
          </h4>

          <p className="section-category__product-count">
            24 models
          </p>
        </div>

        <div className="section-category__baner">
          <div
            className="
            section-category__img
            section-category__img--accessories
          "
          />

          <h4 className="subtitle section-category__subtitle">
            <a href="/">
              Accessories
            </a>
          </h4>

          <p className="section-category__product-count">
            100 models
          </p>
        </div>
      </div>
    </section>
  );
};
