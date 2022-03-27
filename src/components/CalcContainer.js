import './CalcContainer.css';
import Display from './Display.js';
import BtnContainer from './BtnContainer.js';
import {useState} from 'react';

const CalcContainer =  ({controls}) => {
  const [display, setDisplay] = useState('');

  return (
  <> 
  <div className="calcContainer">
  <Display display={display} setDisplay={setDisplay} />
  <BtnContainer controls={controls} display={display} setDisplay={setDisplay} />
  </div>
  </>
  )
};

export default CalcContainer;