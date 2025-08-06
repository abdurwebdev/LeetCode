# Day 8: Expect Function

## Problem Description

Write a function `expect` that helps developers test their code. It should accept a value and return an object with two methods:

- `toBe(val)` - returns `true` if the two values `===` each other, otherwise throws an error `"Not Equal"`
- `notToBe(val)` - returns `true` if the two values `!==` each other, otherwise throws an error `"Equal"`

This problem tests understanding of:

- Function closures
- Object methods
- Error handling with throw statements
- Strict equality (`===`) and inequality (`!==`)
- Testing frameworks concepts

## Examples

### Example 1:

```javascript
Input: expect(5).toBe(5)
Output: true
Explanation: 5 === 5, so the function returns true
```

### Example 2:

```javascript
Input: expect(5).notToBe(5)
Output: throws "Equal"
Explanation: 5 !== 5 is false, so the function throws an error
```

### Example 3:

```javascript
Input: expect(5).toBe(null)
Output: throws "Not Equal"
Explanation: 5 === null is false, so the function throws an error
```

### Example 4:

```javascript
Input: expect(5).notToBe(null)
Output: true
Explanation: 5 !== null is true, so the function returns true
```

## Constraints

- The function can accept any type of value (numbers, strings, objects, arrays, etc.)
- The comparison methods should use strict equality (`===`) and inequality (`!==`)
- Error messages should be exactly `"Not Equal"` and `"Equal"`

## Solution Approach

### Object with Methods Approach

The solution uses a closure to create an object with two methods:

1. Create a function `expect` that accepts a value
2. Return an object with two methods: `toBe` and `notToBe`
3. Each method compares the stored value with the provided argument
4. Use strict equality/inequality operators for comparison
5. Throw appropriate errors or return true based on the comparison

### Time Complexity

- **Time Complexity**: O(1) - constant time comparison operations
- **Space Complexity**: O(1) - minimal memory usage

### Code Implementation

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: function (n) {
      if (val === n) return true;
      else throw new Error("Not Equal");
    },
    notToBe: function (n) {
      if (val !== n) return true;
      else throw new Error("Equal");
    },
  };
};

// Example usage:
console.log(expect(5).toBe(5)); // true
try {
  expect(5).notToBe(5); // throws "Equal"
} catch (error) {
  console.log(error.message); // "Equal"
}
```

## Alternative Solutions

### Using Arrow Functions

A more concise version using arrow functions:

```javascript
var expect = function (val) {
  return {
    toBe: (n) =>
      val === n
        ? true
        : (() => {
            throw new Error("Not Equal");
          })(),
    notToBe: (n) =>
      val !== n
        ? true
        : (() => {
            throw new Error("Equal");
          })(),
  };
};
```

### Using Object Literal with Shorthand

Another approach using object literal shorthand:

```javascript
var expect = function (val) {
  return {
    toBe(n) {
      if (val === n) return true;
      throw new Error("Not Equal");
    },
    notToBe(n) {
      if (val !== n) return true;
      throw new Error("Equal");
    },
  };
};
```

### Using Ternary Operators

A more compact version:

```javascript
var expect = function (val) {
  return {
    toBe: (n) =>
      val === n ||
      (() => {
        throw new Error("Not Equal");
      })(),
    notToBe: (n) =>
      val !== n ||
      (() => {
        throw new Error("Equal");
      })(),
  };
};
```

## Key Learning Points

1. **Function Closures**: Understanding how functions can return objects with methods
2. **Object Methods**: Creating objects with custom methods
3. **Error Handling**: Using `throw` statements to handle errors
4. **Strict Equality**: Understanding `===` vs `==` and `!==` vs `!=`
5. **Testing Concepts**: Basic understanding of testing framework patterns

## Common Pitfalls

1. **Using Loose Equality**: Using `==` instead of `===` for comparison
2. **Wrong Error Messages**: Not using the exact error message strings
3. **Not Returning True**: Forgetting to return `true` on successful comparisons
4. **Incorrect Object Structure**: Not returning an object with the required methods
5. **Missing Error Handling**: Not using try-catch blocks when testing

## Testing Examples

```javascript
// Test with different data types
console.log(expect(5).toBe(5)); // true
console.log(expect("hello").toBe("hello")); // true
console.log(expect(true).toBe(true)); // true
console.log(expect(null).toBe(null)); // true
console.log(expect(undefined).toBe(undefined)); // true

// Test notToBe method
console.log(expect(5).notToBe(10)); // true
console.log(expect("hello").notToBe("world")); // true
console.log(expect(true).notToBe(false)); // true

// Test error cases
try {
  expect(5).toBe(10);
} catch (error) {
  console.log(error.message); // "Not Equal"
}

try {
  expect(5).notToBe(5);
} catch (error) {
  console.log(error.message); // "Equal"
}
```

## Advanced Usage

### Custom Testing Framework

```javascript
// Create a simple testing framework
function test(description, testFunction) {
  try {
    testFunction();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.log(`❌ ${description}: ${error.message}`);
  }
}

// Usage
test("should pass when values are equal", () => {
  expect(5).toBe(5);
});

test("should throw when values are not equal", () => {
  expect(5).toBe(10); // This will throw
});
```

### Complex Object Testing

```javascript
// Test with objects
const obj1 = { name: "John", age: 30 };
const obj2 = { name: "John", age: 30 };
const obj3 = { name: "Jane", age: 25 };

console.log(expect(obj1).toBe(obj1)); // true (same reference)
console.log(expect(obj1).notToBe(obj2)); // true (different references)
console.log(expect(obj1).notToBe(obj3)); // true (different objects)
```

### Array Testing

```javascript
// Test with arrays
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [4, 5, 6];

console.log(expect(arr1).toBe(arr1)); // true (same reference)
console.log(expect(arr1).notToBe(arr2)); // true (different references)
console.log(expect(arr1).notToBe(arr3)); // true (different arrays)
```

## Best Practices

1. **Use Strict Equality**: Always use `===` and `!==` for comparisons
2. **Handle Errors Properly**: Use try-catch blocks when testing functions that might throw
3. **Test Edge Cases**: Test with null, undefined, and different data types
4. **Clear Error Messages**: Use descriptive error messages for debugging
5. **Consistent Return Values**: Always return `true` for successful comparisons

## Performance Considerations

- **Object Creation**: Creates a new object for each expect call
- **Method Access**: Object method lookup is very fast
- **Comparison Operations**: Strict equality checks are O(1)
- **Error Handling**: Throwing errors has minimal performance impact

## Browser Compatibility

- **Object Methods**: Available in all browsers
- **Arrow Functions**: ES6+ (all modern browsers)
- **Object Literal Shorthand**: ES6+ (all modern browsers)
- **Error Handling**: Available in all browsers

## Real-World Applications

1. **Unit Testing**: Creating custom assertion functions
2. **Test Frameworks**: Building simple testing utilities
3. **Validation**: Checking expected vs actual values
4. **Debugging**: Verifying function outputs
5. **API Testing**: Validating API responses

## Related Problems

- Function Composition
- Object Methods
- Error Handling
- Testing Patterns
- Assertion Functions
- Custom Validators

## Common Interview Questions

1. **What's the difference between `===` and `==`?**

   - `===` checks both value and type
   - `==` performs type coercion before comparison
   - Always use `===` for predictable results

2. **How would you extend this to support more comparison methods?**

   - Add methods like `toBeGreaterThan`, `toBeLessThan`, `toContain`
   - Use appropriate comparison operators for each method

3. **What are the performance implications of throwing errors?**
   - Error creation has some overhead
   - Stack trace generation can be expensive
   - Use sparingly in performance-critical code

## Testing Strategies

```javascript
// Comprehensive testing suite
function runTests() {
  const tests = [
    {
      name: "Equal numbers should return true",
      test: () => expect(5).toBe(5),
    },
    {
      name: "Different numbers should throw Not Equal",
      test: () => {
        try {
          expect(5).toBe(10);
          throw new Error("Should have thrown");
        } catch (error) {
          if (error.message !== "Not Equal") {
            throw new Error("Wrong error message");
          }
        }
      },
    },
    {
      name: "Different values should return true for notToBe",
      test: () => expect(5).notToBe(10),
    },
    {
      name: "Equal values should throw Equal for notToBe",
      test: () => {
        try {
          expect(5).notToBe(5);
          throw new Error("Should have thrown");
        } catch (error) {
          if (error.message !== "Equal") {
            throw new Error("Wrong error message");
          }
        }
      },
    },
  ];

  tests.forEach((test, index) => {
    try {
      test.test();
      console.log(`✅ Test ${index + 1}: ${test.name}`);
    } catch (error) {
      console.log(`❌ Test ${index + 1}: ${test.name} - ${error.message}`);
    }
  });
}

runTests();
```
