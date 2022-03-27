import BtnContainer from './BtnContainer';
import { useState } from 'react'; 

const Display = ({display, setDisplay}) => {

  return (
  <div className="display">{display}</div>
  )
};
 
export default Display;