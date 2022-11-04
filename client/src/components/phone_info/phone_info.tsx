import { Link, useNavigate } from 'react-router-dom';
import './phone_info.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PhoneType } from '../../types/PhoneType';
import { Button } from '../button/Button';
import {
  ButtonClassModifier,
  ButtonClassType,
  ButtonType,
} from '../../enums/buttonEnum';

type Props = {
  phoneId: number;
  setSelectedPhones: (value: number[]) => void;
  selectedPhones: number[];
};

export const PhoneInfo: React.FC<Props> = ({
  phoneId,
  setSelectedPhones,
  selectedPhones,
}) => {
  const [foundPhone, setFoundPhone] = useState<PhoneType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadPhone = async () => {
      const response = await axios.get(`http://localhost:8080/products/${phoneId}`);

      const data = await response.data;

      setFoundPhone(data);
    };

    try {
      loadPhone();
    } catch {
      setFoundPhone(null);
    }
  }, []);

  if (!foundPhone) {
    return <h2>404</h2>;
  }

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
            {foundPhone.name}
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
          {foundPhone.name}
        </h1>
        <div className="phone__wrapper">
          <div className="phone__list">
            <img src="" alt="" />
          </div>
          <img
            src={`http://localhost:8080/${foundPhone.images[0]}`}
            alt="pictureCart"
            className="phone__image"
          />
          <div className="phone__functional">
            <div className="phone__price">
              <p className="phone__newPrice">
                $
                {foundPhone.priceDiscount}
              </p>
              <p className="phone__oldPrice">
                $
                {foundPhone.priceRegular}
              </p>
            </div>
            <div className="phone__button">
              {selectedPhones.includes(phoneId)
                ? (
                  <Button
                    title="Added to cart"
                    btnClassType={ButtonClassType.PRIMARY}
                    btnClassModifier={ButtonClassModifier.ADDED}
                    selectedPhones={selectedPhones}
                    setSelectedPhones={setSelectedPhones}
                    phoneId={phoneId}
                    type={ButtonType.CART}
                  />
                )
                : (
                  <Button
                    title="Add to cart"
                    btnClassType={ButtonClassType.PRIMARY}
                    selectedPhones={selectedPhones}
                    setSelectedPhones={setSelectedPhones}
                    phoneId={phoneId}
                    type={ButtonType.CART}
                  />
                )}

              <Button
                btnClassType={ButtonClassType.SECONDARY}
                btnClassModifier={ButtonClassModifier.HEART}
                selectedPhones={selectedPhones}
                setSelectedPhones={setSelectedPhones}
                phoneId={phoneId}
                type={ButtonType.HEART}
              />
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Screen</p>
              <p className="phone__value">
                {foundPhone.screen}
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
                {foundPhone.ram}
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
                {foundPhone.screen}
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
                {foundPhone.ram}
              </p>
            </div>
            <div className="phone__characteristic smalltext">
              <p className="phone__name">Built in memory</p>
              <p className="phone__value">
                {foundPhone.capacity}
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
