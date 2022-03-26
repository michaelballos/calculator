import BtnContainer from './BtnContainer';
import { useCallback, } from 'react';
import './Button';

const Button = ({
  /**
   * The value of the calculator's display
   */
  displayVal,

  /**
   * The function to update the calculator's display
   */
  setDisplayVal,

  /**
   * The label of the button
   * 
   * The variant of the button
   */
  buttonComponents
}) => {

    /**
  const handleClick = useCallback(() => {
     * TODO: Implement the button's behavior
     * On a per variant basis ( this is good starter )
    setDisplayVal(label);
  }, [label, setDisplayVal]);

  return (
    <button
      className={`btn btn-${variant}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
**/
return null;
};

export default Button;