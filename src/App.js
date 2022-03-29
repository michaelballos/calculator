import CalcContainer from './components/CalcContainer';
import BtnContainer from './components/BtnContainer';
import Button from './components/Button';
import Display from './components/Display';
import './index.css';

const App = () => {
  const controls = {
    C: {
      variant: 'clear',
    },
    '+/-': {
      variant: 'invert',
    },
    '%': {
      variant: 'operator',
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
  )
}

/*
<CalcContainer>
  <BtnContainer>
    {btnVal.map(({label, variant}, index) => (
      <Button
        label={label}
        variant={variant}
      />
    ))}
  </BtnContainer>
</CalcContainer>
*/

export default App;
