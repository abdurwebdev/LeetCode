# Day 6: Array Filter

## Problem Description

Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:

- `arr[i]` - number from the `arr`
- `i` - index of `arr[i]`

`filteredArr` should only contain the elements from the `arr` for which the expression `fn(arr[i], i)` evaluates to a truthy value.

A truthy value is a value that is considered true when encountered in a Boolean context.

## Examples

### Example 1:

```javascript
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
```

### Example 2:

```javascript
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
```

### Example 3:

```javascript
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
```

## Constraints

- `0 <= arr.length <= 1000`
- `-109 <= arr[i] <= 109`

## Solution Approach

### Iterative Filter Method

The solution uses a simple iterative approach:

1. Create an empty array to store filtered results
2. Iterate through each element in the input array
3. Call the filtering function with the current element and its index
4. If the function returns a truthy value, add the element to the result array
5. Return the filtered array

### Time Complexity

- **Time Complexity**: O(n) - where n is the length of the input array
- **Space Complexity**: O(n) - to store the filtered results

### Code Implementation

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
};

// Example usage:
let arr = [0, 10, 20, 30];
let fn = (n) => {
  return n > 10;
};
const result = filter(arr, fn); // [20, 30]
```

## Alternative Solutions

### Using Array.reduce()

A functional programming approach:

```javascript
var filter = function (arr, fn) {
  return arr.reduce((filtered, element, index) => {
    if (fn(element, index)) {
      filtered.push(element);
    }
    return filtered;
  }, []);
};
```

### Using Array.forEach()

Another functional approach:

```javascript
var filter = function (arr, fn) {
  const result = [];
  arr.forEach((element, index) => {
    if (fn(element, index)) {
      result.push(element);
    }
  });
  return result;
};
```

### Using Array.flatMap() (Modern JavaScript)

A more concise modern approach:

```javascript
var filter = function (arr, fn) {
  return arr.flatMap((element, index) => (fn(element, index) ? [element] : []));
};
```

## Key Learning Points

1. **Higher-Order Functions**: Understanding how to pass functions as parameters
2. **Truthy/Falsy Values**: Understanding what constitutes a truthy value in JavaScript
3. **Array Iteration**: Different ways to iterate through arrays
4. **Function Parameters**: How to handle functions that take multiple parameters
5. **Functional Programming**: Concepts like pure functions and immutability

## Common Pitfalls

1. **Not Returning the Array**: Forgetting to return the filtered array
2. **Incorrect Function Call**: Not passing the correct parameters to the filtering function
3. **Truthy/Falsy Confusion**: Not understanding what values are considered truthy
4. **Index Parameter**: Forgetting that the function can take an index parameter
5. **Mutating Original Array**: Accidentally modifying the input array

## Truthy and Falsy Values in JavaScript

### Falsy Values:

- `false`
- `0`
- `-0`
- `0n` (BigInt)
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

### Truthy Values:

- Everything else (including negative numbers, non-empty strings, objects, arrays, etc.)

## Testing Examples

```javascript
// Test with different filtering functions
const arr1 = [1, 2, 3, 4, 5];

// Filter even numbers
const evenNumbers = filter(arr1, (n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4]

// Filter numbers greater than 3
const greaterThan3 = filter(arr1, (n) => n > 3);
console.log(greaterThan3); // [4, 5]

// Filter by index (first and last elements)
const firstAndLast = filter(arr1, (n, i) => i === 0 || i === arr1.length - 1);
console.log(firstAndLast); // [1, 5]

// Filter negative numbers
const negativeNumbers = filter([-2, -1, 0, 1, 2], (n) => n < 0);
console.log(negativeNumbers); // [-2, -1]
```

## Best Practices

1. **Use Clear Variable Names**: Make the code readable with descriptive names
2. **Handle Edge Cases**: Consider empty arrays and edge cases
3. **Document Function Parameters**: Clearly document what the filtering function expects
4. **Test with Various Inputs**: Test with different array types and filtering functions
5. **Consider Performance**: For large arrays, consider more efficient approaches

## Performance Optimization Tips

1. **Use for...of for readability**: When you don't need the index
2. **Use traditional for loop for performance**: When you need the index
3. **Avoid unnecessary array methods**: For simple filtering, direct iteration is faster
4. **Consider early termination**: If possible, break out of loops early

## Advanced Usage

### Custom Filter Functions

```javascript
// Filter objects by property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];

const adults = filter(users, (user) => user.age >= 18);
console.log(adults); // [{name: 'Alice', age: 25}, {name: 'Charlie', age: 30}]

// Filter strings by length
const words = ["hello", "world", "javascript", "js"];
const longWords = filter(words, (word) => word.length > 4);
console.log(longWords); // ['hello', 'world', 'javascript']
```

### Chaining with Other Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter even numbers and then double them
const doubledEvens = filter(numbers, (n) => n % 2 === 0).map((n) => n * 2);
console.log(doubledEvens); // [4, 8, 12, 16, 20]
```

## Related Problems

- Array Map
- Array Reduce
- Array Some
- Array Every
- Array Find
- Array FindIndex
- Array Group By

## Browser Compatibility

- **Basic Implementation**: Works in all browsers
- **Array.reduce()**: ES5+ (all modern browsers)
- **Array.flatMap()**: ES2019+ (modern browsers)
- **Arrow Functions**: ES6+ (all modern browsers)

## Performance Considerations

- The solution is optimal with O(n) time complexity
- Space complexity is O(n) in the worst case (when all elements pass the filter)
- For very large arrays, consider using generators or streams for memory efficiency
- The traditional for loop is generally faster than array methods for simple operations

## Real-World Applications

1. **Data Processing**: Filtering large datasets
2. **User Interface**: Filtering lists and tables
3. **API Responses**: Processing and filtering API data
4. **Form Validation**: Filtering valid form inputs
5. **Search Results**: Filtering search results based on criteria
