import './CalcContainer.css';
import Display from './Display.js';
import BtnContainer from './BtnContainer.js';
import {useState} from 'react';

const CalcContainer =  () => {
  const [displayVal, setDisplayVal] = useState(() => 0);

  return (
  <> 
  <div className="calcContainer">
  <Display display={displayVal} setDisplay={setDisplayVal} />
  <BtnContainer display={displayVal} setDisplay={setDisplayVal} />
  </div>
  </>
  )
};

export default CalcContainer;