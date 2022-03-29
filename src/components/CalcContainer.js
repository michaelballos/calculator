import './CalcContainer.css';
import Display from './Display.js';
import BtnContainer from './BtnContainer.js';
import {useState} from 'react';

const CalcContainer =  ({controls}) => {

  const [calc, setCalc] = useState('');
  const [display, setDisplay] = useState('');
          



  return (
  <> 
  <div className="calcContainer">
  <Display display={display} calc={calc} />
  <BtnContainer
    controls={controls}
    display={display} 
    setDisplay={setDisplay} 
    calc={calc}
    setCalc={setCalc}
  />
  </div>
  </>
  )
};

export default CalcContainer;