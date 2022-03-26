import './BtnContainer';
import Button from './Button';
import { useMemo } from 'react';

const BtnContainer = ({ displayVal, setDisplayVal, controls }) => {

  /**
   * List of each button's index in object controls
   */
  const buttonKeys = Object.keys(controls)

  /**
   * Generated Button components using controls object
   */
  const buttonComponents = useMemo(() => {
    return buttonKeys.map(key => {
      const variant = controls[key].variant;
      const label = controls[key].label;
      console.log(variant, label);
      return variant, label;
    })
})
 
        

  return (
    <>
      <div className="btnContainer">
        <Button displayVal={displayVal} setDisplayVal={setDisplayVal} buttonComponents={buttonComponents} />
      </div>
    </>
  );
};

export default BtnContainer;
