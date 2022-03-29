import './Button.css';
import {  useCallback, } from 'react';

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
  integer,

  /**
   * The calculator's current value 
   */
  calc,

  /**
   * The function to update the calculator's calculation display
   */
  setCalc,

}) => {

  const handleNum = () => { 

      const operators = ['+', '-', '*', '/', '%'];

      if (
        operators.includes(btnValue) && calc === '' ||
        operators.includes(btnValue) && operators.includes(calc.slice(-1)
        )
      ) {
        return;
      }

   /** 
     * prevents display of operators twice in a row or when there are no numbers in the display
     */
  
      if (!operators.includes(btnValue)) {
        setDisplay(eval(calc + btnValue).toString());
      }
}

  const calculate = () => {
    setDisplay('');
    setCalc(eval(calc).toString());
};

    
const handleClick = useCallback(() => {
  
      setCalc(calc + btnValue);

      if (variant === 'number' || variant === 'operator') {
        handleNum();
      } else if (variant === 'operate') {
        calculate();
      } else if (variant === 'invert') {
        setCalc(calc * -1);
      } else if (variant === 'clear') {
        setDisplay('');
        setCalc('');
      }

  }, [integer, calc, display]);



     return (
    <button
      className={`btn btn-${variant}`}
      onClick={handleClick}
    >
      {btnValue}
    </button>    
    )
};

export default Button;