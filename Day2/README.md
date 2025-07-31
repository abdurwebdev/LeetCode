# Day 2: Length of Last Word

## Problem Description

Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

## Examples

### Example 1:

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

### Example 2:

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```

### Example 3:

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

## Constraints

- `1 <= s.length <= 104`
- `s` consists of only English letters and spaces `' '`
- There will be at least one word in `s`

## Solution Approach

### String Manipulation Method

The solution uses string manipulation techniques:

1. Trim whitespace from both ends of the string
2. Split the string by one or more whitespace characters
3. Return the length of the last word in the resulting array

### Time Complexity

- **Time Complexity**: O(n) - where n is the length of the input string
- **Space Complexity**: O(n) - to store the split words array

### Code Implementation

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  s = s.trim();
  const words = s.split(/\s+/);
  return words[words.length - 1].length;
};
```

## Alternative Solutions

### Single Pass Approach (Optimized)

A more space-efficient solution that doesn't require storing all words:

```javascript
var lengthOfLastWord = function (s) {
  let length = 0;
  let i = s.length - 1;

  // Skip trailing spaces
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count characters of the last word
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }

  return length;
};
```

### Using Regular Expression

Another approach using regex to find the last word:

```javascript
var lengthOfLastWord = function (s) {
  const match = s.trim().match(/\w+$/);
  return match ? match[0].length : 0;
};
```

## Key Learning Points

1. **String Manipulation**: Understanding how to work with strings, trimming whitespace, and splitting
2. **Regular Expressions**: Using regex patterns like `/\s+/` for multiple whitespace characters
3. **Edge Cases**: Handling strings with multiple spaces, trailing spaces, and single words
4. **Space Optimization**: The single pass approach uses O(1) space instead of O(n)
5. **Array Methods**: Using array indexing to access the last element

## Common Pitfalls

1. **Trailing Spaces**: Forgetting to handle trailing spaces can lead to incorrect results
2. **Multiple Spaces**: Not accounting for multiple consecutive spaces between words
3. **Empty String**: Not handling edge cases where the string might be empty or contain only spaces
4. **Single Word**: Ensuring the solution works for strings with only one word

## Related Problems

- Reverse Words in a String
- Valid Palindrome
- String to Integer (atoi)
- Valid Parentheses
