import './BtnContainer.css';
import Button from './Button';
import { useMemo } from 'react';


/**
 * @param {Props} display - total value
 * @param {Props} setDisplay - setter for total value
 * @param {Props} controls - Object of buttons
 * @param {Props} calc - current calculation value
 * @param {Props} setCalc - setter for current calculation value
 *  
 * @returns {JSX.Element} Creates componenets and container for buttons 
 */
const BtnContainer = ({
  display,
  setDisplay,
  controls,
  calc,
  setCalc,
}) => {
  /**
   *  Array elements have to match keys of controls object in App
   *  Invalid match will ommit UI
   **/
  const btnInterface = [
    'AC', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '=',
  ];

  /**
   * Generates Button Component props to be passed to Button component
   * @returns {JSX.Element} Button components
   */
  const buttonComponents = useMemo(() => {
    return btnInterface.map((key) => {
      const variant = controls[key].variant;

      return (
        <Button
          display={display}
          setDisplay={setDisplay}
          variant={variant}
          key={key}
          btnValue={key}
          calc={calc}
          setCalc={setCalc}
        />
      );
    }); 
  }, [btnInterface, display, setDisplay, controls, calc, setCalc]);

  return (
    <>
      <div className="btnContainer">
        {buttonComponents}
      </div>
    </>
  );
};

export default BtnContainer;
