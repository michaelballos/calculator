import CalcContainer from './components/CalcContainer';
import BtnContainer from './components/BtnContainer';
import Button from './components/Button';
import Display from './components/Display';
import './styles.css';

const App = () => {
  const controls = {
    AC: {
      label: '',
      variant: 'clear',
    },
    '+/-': {
      label: '',
      variant: 'operator',
    },
    '%': {
      label: '',
      variant: 'operator',
    },
    '/': {
      label: '',
      variant: 'operator',
    },
    '*': {
      label: '',
      variant: 'operator',
    },
    '-': {
      label: '',
      variant: 'operator',
    },
    '+': {
      label: '',
      variant: 'operator',
    },
    '.': {
      label: '',
      variant: 'operator',
    },
    '=': {
      label: '',
      variant: 'operate',
    },
    7: {
      label: '',
      variant: 'number',
      integer: 7,
    },
    8: {
      label: '',
      variant: 'number',
      integer: 8,
    },
    9: {
      label: '',
      variant: 'number',
      integer: 9,
    },
    4: {
      label: '',
      variant: 'number',
      integer: 4,
    },
    5: {
      label: '',
      variant: 'number',
      integer: 5,
    },
    6: {
      label: '',
      variant: 'number',
      integer: 6,
    },
    1: {
      label: '',
      variant: 'number',
      integer: 1,
    },
    2: {
      label: '',
      variant: 'number',
      integer: 2,
    },
    3: {
      label: '',
      variant: 'number',
      integer: 3,
    },
    0: {
      label: '',
      variant: 'number',
      integer: 0,
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
