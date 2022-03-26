import './BtnContainer';
import Button from './Button';


const BtnContainer = ({displayVal, setDisplayVal}) => {
  return ( 
  <>
  <div className="btnContainer"></div>
  <Button displayVal={displayVal} setDisplayVal={setDisplayVal} />
  </>
  )
};
 
export default BtnContainer;