import './Button';
import { useCallback, } from 'react';

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
   */
  label,

  /**
   * The variant of the button
   */
  variant,

  /**
   * The value of the button
   */
  btnValue,
  
}) => {

  const handleClick = useCallback(() => {
    /**
     * TODO: Implement the button's behavior
     * On a per variant basis ( this is good starter )
     */
    return variant === 'number' || 'operator' ? setDisplayVal(displayVal + btnValue) : setDisplayVal(0);
    
  }, [label, setDisplayVal]);

  return (
    <button
      className={`btn btn-${variant}`}
      onClick={handleClick}
    >
      {btnValue}
    </button>
  );

};

export default Button;