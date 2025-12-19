import { stringCompare, numberCompare } from './utils';

describe('stringCompare', () => {
  it('should sort strings ascending', () => {
    expect(stringCompare('apple', 'banana', 'asc')).toBeLessThan(0);
    expect(stringCompare('banana', 'apple', 'asc')).toBeGreaterThan(0);
  });

  it('should sort strings descending', () => {
    expect(stringCompare('banana', 'apple', 'desc')).toBeLessThan(0);
    expect(stringCompare('apple', 'banana', 'desc')).toBeGreaterThan(0);
  });
});

describe('numberCompare', () => {
  it('should sort numbers ascending', () => {
    expect(numberCompare(1, 2, 'asc')).toBeLessThan(0);
    expect(numberCompare(2, 1, 'asc')).toBeGreaterThan(0);
  });

  it('should sort numbers descending', () => {
    expect(numberCompare(2, 1, 'desc')).toBeLessThan(0);
    expect(numberCompare(1, 2, 'desc')).toBeGreaterThan(0);
  });
});