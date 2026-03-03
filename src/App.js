
import './App.css';


import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult('Error');
    }
  };

  return (
    <div className="calculator-container">
      <h2>Simple Calculator</h2>
      <div className="display">
        <input
          type="text"
          value={result !== '' ? result : input}
          readOnly
        />
      </div>
      <div className="buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"].map((btn) => {
          const isOperator = ["/", "*", "-", "+"].includes(btn);
          const isDot = btn === ".";
          const isDivide = btn === "/";
          return (
            <button
              key={btn}
              className={isDivide ? "divide" : (isOperator || isDot ? "operator" : "")}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          );
        })}
        <button className="equals" onClick={handleCalculate}>=</button>
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}


export default App;
