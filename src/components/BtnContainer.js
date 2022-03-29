import './BtnContainer.css';
import Button from './Button';
import { useMemo } from 'react';

const BtnContainer = ({ display, setDisplay, controls, calc, setCalc }) => {

  

  /**
   * List of each button's index in object controls
   */
  const buttonKeys = Object.keys(controls);

  /**
   * Generated Button components using controls object
   */

  const btnInterface = [
   'C', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '=',
  ]
  


  const buttonComponents = useMemo(() => {
    return btnInterface.map((key, index) => {
      const variant = controls[key].variant;

          return <Button
          display={display}
          setDisplay={setDisplay}
          variant={variant}
          key={key}
          btnValue={key}
          calc={calc}
          setCalc={setCalc}
        />
     })

}) 

  return (
    <>
  <div className="btnContainer">
    {buttonComponents}
    </div>
  </>
 );
};

export default BtnContainer;
