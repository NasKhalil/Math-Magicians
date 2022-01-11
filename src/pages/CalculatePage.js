/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import Calculator from '../components/Calculator';
import '../App.css';

const CalculatePage = () => (
  <div className="calculatePage">
    <h2>Let's do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatePage;
