import './BtnContainer';
import Button from './Button';
import { useMemo } from 'react';

const BtnContainer = ({ displayVal, setDisplayVal, controls }) => {

  /**
   * List of each button's index in object controls
   */
  const buttonKeys = Object.keys(controls)
  console.log('button keys:',  buttonKeys);

  /**
   * Generated Button components using controls object
   */
  const buttonComponents = useMemo(() => {

    return buttonKeys.map(key => {  
      const {label, variant} = controls[key];
        return <Button
          displayVal={displayVal}
          setDisplayVal={setDisplayVal}
          label={label}
          variant={variant}
          key={key}
          btnValue={key}
        />
    })
}) 

console.log('button components:', buttonComponents);

  return (
    <>
      <div className="btnContainer">
        {buttonComponents}
      </div>
    </>
  );
};

export default BtnContainer;
