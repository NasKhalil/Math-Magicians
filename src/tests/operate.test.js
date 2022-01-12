import operate from '../logic/operate';

describe('mathematical operations', () => {
  test('Add two numbers', () => {
    expect(operate(5, 10, '+')).toBe('15');
  });

  test('Subtract two numbers', () => {
    expect(operate(20, 10, '-')).toBe('10');
  });

  test('Multiply two numbers', () => {
    expect(operate(4, 3, 'x')).toBe('12');
  });

  test('Divise two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  test('Use Modulo', () => {
    expect(operate(8, 3, '%')).toEqual('2');
  });
});
