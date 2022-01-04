import React, { useState } from 'react';
import calculate from '../logic/calculate';
import buttonNames from './BtnNames';
import '../App.css';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [calcObject, setCalcObject] = useState({});

  function handleClick(e) {
    e.preventDefault();
    try {
      setCalcObject({ ...calcObject, ...calculate(calcObject, e.target.textContent) });
    } catch (error) {
      return calcObject;
    }
    return 0;
  }

  const { next, total } = calcObject;
  const btnClass = (i) => ((((i + 1) % 4 === 0) || i === 18) ? 'orange-btn' : 'gray-btn');

  return (
    <div className="calc-container">
      <div className="calc-display">{next || total || 0}</div>
      {buttonNames.map((name, i) => (
        <button key={i.toString()} type="button" onClick={handleClick} className={btnClass(i)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Calculator;
