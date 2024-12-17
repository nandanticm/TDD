const { add, subtract, multiply, divide, multiplyByOne } = require('./mathOperation');
describe('Math Operations', () => {
    // Test cases for add
    describe('add', () => {
        test('should return the sum of two positive numbers', () => {
            expect(add(2, 3)).toBe(5);
        });

        test('should return the sum of positive and negative numbers', () => {
            expect(add(-2, 3)).toBe(1);
        });

        test('should return the sum of two negative numbers', () => {
            expect(add(-2, -3)).toBe(-5);
        });
    });
      // Test cases for divide
      describe('divide', () => {
        test('should return the division of two positive numbers', () => {
            expect(divide(6, 3)).toBe(2);
        });

        test('should return a negative result when dividing by a negative number', () => {
            expect(divide(6, -3)).toBe(-2);
        });

        test('should throw an error when dividing by zero', () => {
            expect(() => divide(6, 0)).toThrow('Division by zero is not allowed');
        });
    });
});