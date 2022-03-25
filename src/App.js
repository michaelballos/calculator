import './styles.css';
import {useState} from 'react';







function App() {
const [currentDisplay, setDisplay] = useState(0);
}

  return (
    <div className="calc-grid">
      <div className="display">
        <div className="previousDisplay"></div>
        <div className="currentDisplay">{currentDisplay}</div>
      </div>

      <div id="specialInput">

      </div>

        <button className="grey" onClick="setDisplay()">AC</button>
        <button className="grey">+/-</button>
        <button className="grey">%</button>
        <button className="yellow">÷</button>
        <button className="dark">7</button>
        <button className="dark">8</button>
        <button className="dark">9</button>
        <button className="yellow">*</button>
        <button className="dark">4</button>
        <button className="dark">5</button>
        <button className="dark">6</button>
        <button className="yellow">-</button>
        <button className="dark">1</button>
        <button className="dark">2</button>
        <button className="dark">3</button>
        <button className="yellow">+</button>
        <button className="spanTwo">0</button>
        <button className="dark">.</button>
        <button className="yellow">=</button>
    </div>
  )
}

export default App;
