import './Display.css';

/**
 * @param {props} display - total display value
 * @param {props} calc - current calculation value 
 * 
 * @returns {JSX.Element} Display component 
 */
const Display = ({ 
  display,
  calc }) => {
  return (
    <>
      <div className="displayCalc">{calc}</div>
      <div className="display">{display}</div>
    </>
  );
};
export default Display;
