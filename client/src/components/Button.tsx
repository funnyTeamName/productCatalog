import classNames from 'classnames';
import { ButtonClass } from '../enums/Enums';

type Props = {
  title?: string,
  btnClass: ButtonClass,
  isActiveBtn?: boolean,
  setIsActiveBtn?: (value: boolean) => void,
};

export const Button: React.FC<Props> = ({
  title,
  btnClass,
  isActiveBtn,
  setIsActiveBtn,
}) => {
  const handleClick = () => {
    if (setIsActiveBtn) {
      setIsActiveBtn(!isActiveBtn);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={classNames('button', btnClass,
        {
          'button--secondary-active': isActiveBtn,
        })}
      type="button"
    >
      {title}
    </button>
  );
};
