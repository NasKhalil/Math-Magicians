import operate from "../logic/operate";

describe('mathematical operations', () => {
    test('Add two numbers', () => {
      expect(operate(5, 10, '+')).toBe('15');
    });
  
    test('Subtract two numbers', () => {
      expect(operate(20, 10, '-')).toBe('10');
    });
});