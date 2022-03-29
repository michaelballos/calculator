import './Button.css';
import { useCallback } from 'react';

/**
 * @param {Props} display - total value displayed
 * @param {Props} setDisplay - setter function for total value
 * @param {Props} variant - type of button 
 * @param {Props} btnValue - value of button when clicked
 * @param {Props} calc - current calculation value 
 * @param {Props} setCalc - setter function for current calculation value
 * 
 * @returns {JSX.Element} Button component
 */
const Button = ({
  display,
  setDisplay,
  variant,
  btnValue,
  calc,
  setCalc,
}) => {

  /**
   * function to handle calculator operator rules 
   */
  const handleNum = () => {
    const operators = ['+', '-', '*', '/', '%'];

    /**
     * prevents display of operators twice in a row or when there are no numbers in the display
     * @returns
     */
    if (
      (operators.includes(btnValue) && calc === '') ||
      (operators.includes(btnValue) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    /**
     * Sets total value of current calculation  
     */
    if (!operators.includes(btnValue)) {
      setDisplay(eval(calc + btnValue).toString());
    }
  };

  /**
   * function to handle button click of equal sign 
   */
  const calculate = () => {
    setDisplay(eval(calc).toString());
    setCalc('');
  };

  /**
   * callback function that handles button click by variant type
  */
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
    } else if (variant === 'percent') {
      setCalc(calc / 100);
    }
  }, [calc, display]);

  return (
    <button className={`btn btn-${btnValue}`} onClick={handleClick}>
      {btnValue}
    </button>
  );
};

export default Button;
