import './BtnContainer';
import Button from './Button';
import { useMemo } from 'react';

const BtnContainer = ({ display, setDisplay, controls }) => {
 const btnInterface = [
    'C', '+/-', '%', '/',
    7, 8, 9, '*',
    4, 5, 6, '-',
    1, 2, 3, '+',
    0, '.', '=',
  ];


   

  /**
   * List of each button's index in object controls
   */
  const buttonKeys = Object.keys(controls)
  /**
   * Generated Button components using controls object
   */
  const buttonComponents = useMemo(() => {
    return buttonKeys.map(key => {  
      const {label, variant, integer} = controls[key];


        return <Button
          display={display}
          setDisplay={setDisplay}
          label={label}
          variant={variant}
          key={key}
          btnValue={key}
          integer={integer}
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
