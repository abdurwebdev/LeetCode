# Day 4: Sleep

## Problem Description

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

This problem tests understanding of asynchronous programming, Promises, and timing functions in JavaScript.

## Examples

### Example 1:

```javascript
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // 100
```

### Example 2:

```javascript
async function example() {
  console.log("Start");
  await sleep(2000);
  console.log("After 2 seconds");
}
```

### Example 3:

```javascript
sleep(500)
  .then(() => {
    console.log("Slept for 500ms");
    return "Done";
  })
  .then((result) => console.log(result)); // 'Done'
```

## Constraints

- `1 <= millis <= 1000`
- The function should be asynchronous
- The function should return a Promise
- The Promise should resolve after the specified milliseconds

## Solution Approach

### Promise-based Sleep Function

The solution uses JavaScript's Promise constructor and setTimeout:

1. Create a new Promise
2. Use setTimeout to delay the resolution
3. Resolve the Promise after the specified milliseconds
4. Return the Promise

### Time Complexity

- **Time Complexity**: O(1) - constant time operation
- **Space Complexity**: O(1) - minimal memory usage for the Promise

### Code Implementation

```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(200);
    }, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
```

## Alternative Solutions

### Using Arrow Functions

A more concise version using arrow functions:

```javascript
async function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), millis);
  });
}
```

### Using async/await with setTimeout

A different approach using a wrapper function:

```javascript
function sleep(millis) {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
```

### Using Promise.resolve with setTimeout

Another pattern:

```javascript
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
  return;
}
```

## Key Learning Points

1. **Asynchronous Programming**: Understanding how to work with Promises and async/await
2. **setTimeout Function**: Using JavaScript's built-in timing function
3. **Promise Constructor**: Creating custom Promises for asynchronous operations
4. **Error Handling**: Understanding Promise rejection and error propagation
5. **Event Loop**: How JavaScript handles asynchronous operations

## Common Pitfalls

1. **Forgetting to Return Promise**: The function must return a Promise
2. **Incorrect setTimeout Usage**: Not understanding that setTimeout is asynchronous
3. **Error Handling**: Not considering error scenarios in the Promise
4. **Memory Leaks**: Not clearing timeouts in certain scenarios
5. **Blocking Operations**: Confusing sleep with blocking operations

## Best Practices

1. **Use Arrow Functions**: For cleaner, more readable code
2. **Error Handling**: Consider adding error handling for edge cases
3. **Documentation**: Always document the expected behavior
4. **Testing**: Test with various millisecond values
5. **Performance**: Be aware that this is not a true "sleep" - it doesn't block the thread

## Advanced Usage

### With Error Handling

```javascript
async function sleep(millis) {
  return new Promise((resolve, reject) => {
    if (millis < 0) {
      reject(new Error("Invalid millis value"));
      return;
    }
    setTimeout(() => resolve(), millis);
  });
}
```

### With Cancellation Support

```javascript
function sleep(millis) {
  let timeoutId;
  const promise = new Promise((resolve) => {
    timeoutId = setTimeout(resolve, millis);
  });

  promise.cancel = () => {
    clearTimeout(timeoutId);
  };

  return promise;
}
```

## Related Problems

- Promise Time Limit
- Promise Pool
- Promise All
- Promise Race
- Async/Await Patterns

## Browser Compatibility

- **Promise**: ES6+ (all modern browsers)
- **async/await**: ES2017+ (all modern browsers)
- **setTimeout**: Available in all browsers

## Performance Considerations

- The function doesn't block the main thread
- Memory usage is minimal
- Suitable for non-blocking delays in web applications
- Consider using `requestAnimationFrame` for animation-related delays
