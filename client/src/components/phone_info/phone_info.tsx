import { Link, useNavigate } from 'react-router-dom';
import './phone_info.scss';
import { Phone } from '../../types/Phone';

type Props = {
  phones: Phone[];
};

export const PhoneInfo: React.FC<Props> = ({
  phones,
}) => {
  const findPhone = phones.find(phone => phone.id);
  const navigate = useNavigate();

  return (
    <main className="phone">
      <div className="phone-info">
        <div className="phone-info__logo">
          <Link to="/" className="phone-info__logo-home" />
          <Link to="/" className="phone-info__logo-vector" />

          <Link
            to="/Phones"
            className="phone-info__logo-link"
          >
            Phones
          </Link>
          <Link to="/" className="phone-info__logo-vector" />
          <p className="phone-info__logo-text">
            {findPhone?.name}
          </p>
        </div>
        <div className="back__btn">
          <Link
            to="/Phones"
            className="back__btn-vector"
          />
          <button
            type="submit"
            className="back__btn-link"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="phone__title h1">
          {findPhone?.name}
        </h1>
        <div className="phone__wrapper">
          <div className="phone__list">
            <img src="" alt="" />
          </div>
          <img
            src={`http://localhost:8080/${findPhone?.image}`}
            alt="pictureCart"
            className="phone__image"
          />
          <div className="phone__functional">
            <div className="phone__price">
              <p className="phone__newPrice">
                $
                {findPhone?.price}
              </p>
              <p className="phone__oldPrice">
                $
                {findPhone?.fullPrice}
              </p>
            </div>
            <div className="phone__button">
              {/* <Button
                title="Add to cart"
                btnClassType={ButtonClassType.PRIMARY}
              /> */}

              {/* <Button
                btnClassType={ButtonClassType.SECONDARY}
                btnClassModifier={ButtonClassModifier.HEART}
                isActiveBtn={isActiveBtn}
              /> */}
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Screen</p>
              <p className="phone__value">
                {findPhone?.screen}
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Resolution</p>
              <p className="phone__value">
                Resolution
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Processor</p>
              <p className="phone__value">Processor</p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">RAM</p>
              <p className="phone__value">
                {findPhone?.ram}
              </p>
            </div>
          </div>
        </div>
        <div className="phone__content">
          <div className="phone__about">
            <h2 className="phone__subtitle h2">About</h2>
            <div className="phone__line" />
            <div className="phone__about--text bodytext">
              Phone description
            </div>
          </div>
          <div className="phone__specs">
            <h2 className="phone__subtitle h2">Tech specs</h2>
            <div className="phone__line cart__specs--line" />
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Screen</p>
              <p className="phone__value">
                {findPhone?.screen}
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Resolution</p>
              <p className="phone__value">
                Phone Resolution
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Processor</p>
              <p className="phone__value">Phone processor</p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">RAM</p>
              <p className="phone__value">
                {findPhone?.ram}
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Built in memory</p>
              <p className="phone__value">
                {findPhone?.capacity}
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Camera</p>
              <p className="phone__value">Phone camera</p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Zoom</p>
              <p className="phone__value">Phone zoom</p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Ceil</p>
              <p className="phone__value">Phone ceil</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
