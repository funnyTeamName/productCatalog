import classNames from 'classnames';
import {
  ButtonClassModifier,
  ButtonClassType,
  ButtonType,
} from '../../enums/ButtonEnum';
import './Button.scss';

type Props = {
  title?: string,
  btnClassType: ButtonClassType,
  btnClassModifier?: ButtonClassModifier,
  isActiveBtn?: boolean,
  selectedPhones: number[];
  setSelectedPhones: (value: number[]) => void;
  phoneId: number;
  type: ButtonType;
};

export const Button: React.FC<Props> = ({
  title,
  btnClassType,
  isActiveBtn,
  btnClassModifier,
  selectedPhones,
  setSelectedPhones,
  phoneId,
  type,
}) => {
  const handleClick = () => {
    if (type === 'cart') {
      if (selectedPhones.includes(phoneId)) {
        setSelectedPhones(selectedPhones.filter(id => id !== phoneId));
      } else {
        setSelectedPhones([...selectedPhones, phoneId]);
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(btnClassType, btnClassModifier,
        {
          'button__secondary--heart-acive': isActiveBtn,
        })}
      type="button"
    >
      {title}
    </button>
  );
};
