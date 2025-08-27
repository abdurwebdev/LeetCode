# Calculator Class with Method Chaining

This project implements a `Calculator` class in JavaScript that supports basic arithmetic operations and method chaining. It is designed to pass test cases where consecutive operations are performed on a starting value.

## Features

- **Addition (`add`)**: Adds a number to the current result.
- **Subtraction (`subtract`)**: Subtracts a number from the current result.
- **Multiplication (`multiply`)**: Multiplies the current result by a number.
- **Division (`divide`)**: Divides the current result by a number. Throws an error if dividing by zero.
- **Exponentiation (`power`)**: Raises the current result to the power of a number.
- **Get Result (`getResult`)**: Returns the current result.

All methods (except `getResult`) return the `Calculator` instance to allow chaining.

## Usage

```javascript
// Create a new Calculator instance with initial value 10
const calc = new Calculator(10);

// Perform chained operations
const result = calc.add(5).subtract(7).multiply(2).divide(4).power(2).getResult();
console.log(result); // Outputs the final result
```

### Division by Zero

```javascript
try {
    new Calculator(20).divide(0).getResult();
} catch (err) {
    console.log(err.message); // "Division by zero is not allowed"
}
```

## Class Implementation

```javascript
class Calculator {
    constructor(value = 0) {
        this.result = value;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) throw new Error("Division by zero is not allowed");
        this.result /= value;
        return this;
    }

    power(value) {
        this.result **= value;
        return this;
    }

    getResult() {
        return this.result;
    }
}
```

## Example

```javascript
const calc = new Calculator(2);
console.log(calc.multiply(5).power(2).getResult()); // Output: 100
```

## Notes
- The class supports method chaining.
- Throws an error with exact message "Division by zero is not allowed" if division by zero is attempted.
- Supports floating point operations within a precision of `10^-5`.

