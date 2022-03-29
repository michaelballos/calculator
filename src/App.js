import CalcContainer from './components/CalcContainer';
import BtnContainer from './components/BtnContainer';
import Button from './components/Button';
import Display from './components/Display';
import './index.css';


/**
 * @returns {JSX.Element} App component
 */
const App = () => {
  /**
   * keys have to match content of btnInterface in BtnContainer component
   * Invalid match will ommit UI
   */
  const controls = {
    AC: {
      variant: 'clear',
    },
    '+/-': {
      variant: 'invert',
    },
    '%': {
      variant: 'percent',
    },
    '/': {
      variant: 'operator',
    },
    '*': {
      variant: 'operator',
    },
    '-': {
      variant: 'operator',
    },
    '+': {
      variant: 'operator',
    },
    '.': {
      variant: 'operator',
    },
    '=': {
      variant: 'operate',
    },
    7: {
      variant: 'number',
    },
    8: {
      variant: 'number',
    },
    9: {
      variant: 'number',
    },
    4: {
      variant: 'number',
    },
    5: {
      variant: 'number',
    },
    6: {
      variant: 'number',
    },
    1: {
      variant: 'number',
    },
    2: {
      variant: 'number',
    },
    3: {
      variant: 'number',
    },
    0: {
      variant: 'number',
    },
  };

  return (
    <>
      <CalcContainer controls={controls}>
        <Display />
        <BtnContainer>
          <Button />
        </BtnContainer>
      </CalcContainer>
    </>
  );
};

export default App;
