# Day 3: Array Last Element

## Problem Description

Write a function that retrieves the last element of an array. If the array is empty, return -1.

This is a custom implementation of an array method that mimics the behavior of accessing the last element of an array.

## Examples

### Example 1:

```javascript
const arr = [1, 2, 3];
arr.last(); // 3
```

### Example 2:

```javascript
const arr = [];
arr.last(); // -1
```

### Example 3:

```javascript
const arr = [42];
arr.last(); // 42
```

## Constraints

- The array can contain any type of elements (numbers, strings, objects, etc.)
- The array can be empty
- The array can have any length from 0 to the maximum array size

## Solution Approach

### Array Prototype Method

The solution extends the Array prototype to add a custom `last()` method:

1. Check if the array has any elements (length > 0)
2. If the array is not empty, return the last element using `this[this.length - 1]`
3. If the array is empty, return -1

### Time Complexity

- **Time Complexity**: O(1) - constant time access to the last element
- **Space Complexity**: O(1) - no extra space required

### Code Implementation

```javascript
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```

## Alternative Solutions

### Using Array.at() Method (Modern JavaScript)

A more modern approach using the `at()` method:

```javascript
Array.prototype.last = function () {
  return this.length > 0 ? this.at(-1) : -1;
};
```

### Using Destructuring Assignment

Another approach using destructuring:

```javascript
Array.prototype.last = function () {
  const [last] = this.slice(-1);
  return last !== undefined ? last : -1;
};
```

### Using Optional Chaining

A concise approach using optional chaining:

```javascript
Array.prototype.last = function () {
  return this[this.length - 1] ?? -1;
};
```

## Key Learning Points

1. **Array Prototype Extension**: Understanding how to extend built-in JavaScript objects
2. **Array Indexing**: Using `array[array.length - 1]` to access the last element
3. **Conditional Logic**: Using ternary operators for concise conditional returns
4. **Edge Case Handling**: Properly handling empty arrays
5. **Modern JavaScript Features**: Understanding newer methods like `at()` and optional chaining

## Common Pitfalls

1. **Empty Array Handling**: Forgetting to check if the array is empty before accessing elements
2. **Index Calculation**: Incorrectly calculating the index of the last element
3. **Return Type Consistency**: Ensuring the return type is consistent across all cases
4. **Prototype Pollution**: Being careful when extending built-in prototypes in production code

## Best Practices

1. **Use Modern Methods**: Consider using `at()` method for cleaner code in modern environments
2. **Type Safety**: Consider TypeScript for better type safety when working with arrays
3. **Documentation**: Always document the expected behavior and return types
4. **Testing**: Test with various array types and edge cases

## Related Problems

- Array Reduce Transformation
- Array Filter
- Array Map
- Array Flat
- Array Group By

## Browser Compatibility

- **Array.prototype.last**: Custom implementation (works in all browsers)
- **Array.at()**: Modern browsers (ES2022)
- **Optional Chaining (??)**: Modern browsers (ES2020)

## Performance Considerations

- The solution is optimal with O(1) time complexity
- No additional memory allocation required
- Works efficiently for arrays of any size
