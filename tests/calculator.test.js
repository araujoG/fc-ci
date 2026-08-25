const { add, subtract, multiply, divide } = require('../src/calculator');

describe('Calculator', () => {
  // --- add ---
  describe('add()', () => {
    it('should return the sum of two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should return the correct result for negative numbers', () => {
      expect(add(-1, -4)).toBe(-5);
    });

    it('should return the correct result when adding zero', () => {
      expect(add(7, 0)).toBe(7);
    });
  });

  // --- subtract ---
  describe('subtract()', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  // --- multiply ---
  describe('multiply()', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should handle negative multiplication', () => {
      expect(multiply(-2, 6)).toBe(-12);
    });
  });

  // --- divide ---
  describe('divide()', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle division resulting in a float', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed.');
    });
  });
});
