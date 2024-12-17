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
});