import BtnContainer from './BtnContainer';

const Display = ({ display, calc}) => {
  return (
    <>
      <div className="display">{display}</div>
      <div className="displayCalc">{calc}</div>
    </>
  );
};
export default Display;
