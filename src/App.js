import './styles.css';

function App() {
  return (
    <div className="calc-grid">
      <div className="display">
        <div className="previousDisplay">3000</div>
        <div className="currentDisplay"> 5,000 + 3</div>
      </div>
        <button className="grey">AC</button>
        <button className="grey">+/-</button>
        <button className="grey">%</button>
        <button className="yellow">÷</button>
        <button className="dark">7</button>
        <button className="dark">8</button>
        <button className="dark">9</button>
        <button className="dark">X</button>
        <button className="dark">4</button>
        <button className="dark">5</button>
        <button className="dark">6</button>
        <button className="yellow">-</button>
        <button className="dark">1</button>
        <button className="num">2</button>
        <button className="dark">3</button>
        <button className="yellow">+</button>
        <button className="spanTwo">0</button>
        <button className="dark">.</button>
        <button className="yellow">=</button>
    </div>
  )
}

export default App;
