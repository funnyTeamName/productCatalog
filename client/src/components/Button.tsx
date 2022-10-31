import classNames from 'classnames';
import { ButtonClassModifier, ButtonClassType } from '../enums/Enums';

type Props = {
  title?: string,
  btnClassType: ButtonClassType,
  btnClassModifier?: ButtonClassModifier,
  isActiveBtn?: boolean,
  setIsActiveBtn?: (value: boolean) => void,
};

export const Button: React.FC<Props> = ({
  title,
  btnClassType,
  isActiveBtn,
  setIsActiveBtn,
  btnClassModifier,
}) => {
  const handleClick = () => {
    if (setIsActiveBtn) {
      setIsActiveBtn(!isActiveBtn);
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
