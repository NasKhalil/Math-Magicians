import calculate from '../logic/calculate';

describe('unit tests for calculate.js', () => {
  test('checking when = is clicked the result should be subtraction', () => {
    const obj = {
      total: 20,
      next: 10,
      operation: '-',
    };
    const buttonName = '=';
    expect(calculate(obj, buttonName)).toStrictEqual({
      total: '10',
      next: null,
      operation: null,
    });
  });
});
