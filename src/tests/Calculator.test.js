import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator', () => {
  test('checks key press', () => {
    render(<Calculator />);

    const seven = screen.getByText('7');
    const two = screen.getByText('2');
    const result = screen.getByTestId('display-element');
    fireEvent.click(seven);
    fireEvent.click(two);

    expect(result.innerHTML).toBe('72');
  });

  test('multiplies correctly', () => {
    render(<Calculator />);

    const one = screen.getByText('1');
    const four = screen.getByText('4');
    const multiply = screen.getByText('x');
    const equal = screen.getByText('=');
    const result = screen.getByTestId('display-element');
    fireEvent.click(one);
    fireEvent.click(multiply);
    fireEvent.click(four);
    fireEvent.click(equal);

    expect(result.innerHTML).toBe('4');
  });
});
