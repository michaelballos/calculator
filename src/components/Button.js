import './Button';
import { useCallback, } from 'react';
import { clear } from '@testing-library/user-event/dist/clear';

const Button = ({
  /**
   * The value of the calculator's display
   */
  display,

  /**
   * The function to update the calculator's display
   */
  setDisplay,

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
 
  /**
   * The integer value of the button
   */
  integer
}) => {
  




  const handleClick = useCallback(() => {
    /**
     * TODO: Implement the button's behavior
     * On a per variant basis ( this is good starter )
     */
    


    if (variant === 'number') {
      setDisplay(display + integer);
    } else if (variant === 'operator') {
      setDisplay(display + btnValue);
    } else if (variant === 'operate') {
      const input = display.split(/[%*+'/-]/);
      const operate = display.split(/[0-9]/); 
      const result = input[0] + operate[1] + input[1];
     console.log(input, operate, result); 
    }


  }, [integer, display, setDisplay]);


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