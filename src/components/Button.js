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
   * callback function that handles button click by variant type
  */
  const handleClick = useCallback(() => {

    if (variant === 'number' || variant === 'operator') {
      setCalc(calc + btnValue);

    } else if (variant === 'operate') {
      setDisplay(eval(calc).toString());
      setCalc('');

    } else if (variant === 'invert') {
      setCalc(calc * -1);

    } else if (variant === 'clear') {
      setDisplay('');
      setCalc('');

    } else if (variant === 'percent') {
      setCalc(calc / 100);
    }
  }, [setCalc, calc, setDisplay, variant, display]);

  return (
    <button className={`btn ${variant} btn-${btnValue}`} onClick={handleClick}>
      {btnValue}
    </button>
  );
};

export default Button;
