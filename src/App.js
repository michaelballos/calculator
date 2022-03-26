import CalcContainer from './components/CalcContainer';
import BtnContainer from './components/BtnContainer';
import Button from './components/Button';
import Display from './components/Display';
import './styles.css';

const App = () => {
  const controls = {
    C: {
      label: '',
      variant: 'other',
    },
    '+/-': {
      label: '',
      variant: 'operator',
    },
    '%': {
      label: '',
      variant: 'operator',
    },
    '÷': {
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
      variant: 'operator',
    },
    7: {
      label: '',
      variant: 'number',
    },
    8: {
      label: '',
      variant: 'number',
    },
    9: {
      label: '',
      variant: 'number',
    },
    4: {
      label: '',
      variant: 'number',
    },
    5: {
      label: '',
      variant: 'number',
    },
    6: {
      label: '',
      variant: 'number',
    },
    1: {
      label: '',
      variant: 'number',
    },
    2: {
      label: '',
      variant: 'number',
    },
    3: {
      label: '',
      variant: 'number',
    },
    0: {
      label: '',
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
