# Valid Anagram (LeetCode 242)

## Problem
Check if two strings `s` and `t` are anagrams of each other.

## Solution
Use a frequency map to count characters in `s` and `t` and then compare the counts.

```javascript
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let freqS = {};
    let freqT = {};

    for (let ch of s) {
        freqS[ch] = (freqS[ch] || 0) + 1;
    }

    for (let ch of t) {
        freqT[ch] = (freqT[ch] || 0) + 1;
    }

    for (let key in freqS) {
        if (freqS[key] !== freqT[key]) return false;
    }

    return true;
};
```

## Complexity
- Time: O(n)
- Space: O(n)

