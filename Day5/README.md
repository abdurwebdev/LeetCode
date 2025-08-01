# Day 5: Create Hello World Function

## Problem Description

Write a function `createHelloWorld`. It should return a new function that always returns `"Hello World"`.

This problem tests understanding of:

- Function closures
- Higher-order functions
- Return statements
- Function composition

## Examples

### Example 1:

```javascript
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"
```

### Example 2:

```javascript
Input: args = [{}, null, 42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"
```

### Example 3:

```javascript
Input: args = ["hello", "world"]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f("hello", "world"); // "Hello World"
```

## Constraints

- `0 <= args.length <= 10`
- The function should return a string "Hello World" regardless of input arguments

## Solution Approach

### Closure-based Solution

The solution uses a closure to create a function that always returns "Hello World":

1. Create a function `createHelloWorld` that returns another function
2. The returned function should ignore all arguments and return "Hello World"
3. Use rest parameters (`...args`) to accept any number of arguments

### Time Complexity

- **Time Complexity**: O(1) - constant time operation
- **Space Complexity**: O(1) - minimal memory usage

### Code Implementation

```javascript
/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"
```

## Alternative Solutions

### Using Arrow Functions

A more concise version using arrow functions:

```javascript
var createHelloWorld = function () {
  return (...args) => "Hello World";
};
```

### Using Function Expression

Another approach using function expression:

```javascript
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};
```

### Using Immediately Invoked Function Expression (IIFE)

A different pattern:

```javascript
var createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};
```

## Key Learning Points

1. **Function Closures**: Understanding how functions can return other functions
2. **Higher-Order Functions**: Functions that take or return other functions
3. **Rest Parameters**: Using `...args` to accept variable number of arguments
4. **Return Statements**: The importance of returning values vs. just logging
5. **Function Composition**: Building complex functions from simpler ones

## Common Pitfalls

1. **Console.log vs Return**: Using `console.log()` instead of `return` statement
2. **Unnecessary Conditions**: Adding conditions that are always true (like `args.length >= 0`)
3. **Ignoring Arguments**: Not using rest parameters to handle variable arguments
4. **Wrong Return Type**: Returning something other than the string "Hello World"
5. **Missing Function**: Not returning a function from `createHelloWorld`

## Testing Examples

```javascript
const f = createHelloWorld();

// Test with no arguments
console.log(f()); // "Hello World"

// Test with various arguments
console.log(f(1, 2, 3)); // "Hello World"
console.log(f("hello", "world")); // "Hello World"
console.log(f({}, null, undefined)); // "Hello World"
console.log(f([1, 2, 3])); // "Hello World"

// Test multiple calls
console.log(f()); // "Hello World"
console.log(f()); // "Hello World"
console.log(f()); // "Hello World"
```

## Advanced Concepts

### Function Factory Pattern

This problem demonstrates the function factory pattern:

```javascript
// Function factory that creates specialized functions
function createGreeter(greeting) {
  return function (name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("World")); // "Hello, World!"
console.log(sayHi("Alice")); // "Hi, Alice!"
```

### Currying Example

Related concept of function currying:

```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}
```

## Best Practices

1. **Use Rest Parameters**: Always use `...args` to handle variable arguments
2. **Return Values**: Always return the expected value, don't just log it
3. **Keep It Simple**: Don't add unnecessary conditions or complexity
4. **Test Thoroughly**: Test with various argument types and counts
5. **Document Clearly**: Use clear function names and comments

## Related Problems

- Function Composition
- Partial Application
- Currying
- Memoization
- Callback Functions

## Browser Compatibility

- **Basic Implementation**: Works in all browsers
- **Arrow Functions**: ES6+ (all modern browsers)
- **Rest Parameters**: ES6+ (all modern browsers)
- **Function Closures**: Available in all JavaScript environments

## Performance Considerations

- The solution is optimal with O(1) time complexity
- Minimal memory footprint
- No side effects
- Pure function (same output for same input)

## Real-World Applications

1. **Default Handlers**: Creating default event handlers
2. **Mock Functions**: Creating mock functions for testing
3. **Factory Functions**: Creating specialized functions
4. **Configuration**: Setting up default configurations
5. **Middleware**: Creating middleware functions in web frameworks
