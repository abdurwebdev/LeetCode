# First Unique Character in a String (LeetCode 387)

## Problem
Find the index of the first non-repeating character in a string `s`. If none exists, return -1.

## Solution
Count the frequency of each character, then find the first character with frequency 1.

```javascript
var firstUniqChar = function(s) {
    let freq = {};

    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (freq[s[i]] === 1) return i;
    }

    return -1;
};
```

## Complexity
- Time: O(n)
- Space: O(n)

