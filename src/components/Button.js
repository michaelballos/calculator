import './Button';
import { useState, useEffect, useCallback, } from 'react';

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
  integer,

  /**
   * The function to calculate the display
   */
  calc,

  setCalc,

  operators,
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

      setCalc(calc + btnValue);
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
  
      if (variant === 'number' || variant === 'operator') {
        handleNum();
      } else if (variant === 'operate') {
        calculate();
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