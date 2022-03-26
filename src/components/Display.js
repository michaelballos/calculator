import { useState } from 'react'; 
import BtnContainer from './BtnContainer';

const Display = ({display, setDisplay}) => {

  return (
  <div className="display">{display}</div>
  )
};
 
export default Display;