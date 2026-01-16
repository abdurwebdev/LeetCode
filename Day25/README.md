# Fast Power (Binary Exponentiation) in JavaScript

## Problem
We want to calculate `x` raised to the power `n` (x^n) efficiently, even for very large `n`.

## Naive Approach
- Multiply `x` by itself `n` times.
- Complexity: O(n)
- This is too slow for large `n` like 2^2147483647.

## Optimized Approach: Binary Exponentiation
- Idea: `x^n = x * (x^2)^(n/2)`
- Works for both even and odd powers.
- Time Complexity: O(log n)
- Space Complexity: O(1)

## Code Example
```javascript
var myPow = function(x, n) {
    let power = Math.abs(n);
    let ans = 1;

    while (power > 0) {
        if (power % 2 === 1) {
            ans *= x; // if power is odd, multiply one x into ans
        }
        x *= x;             // square the base
        power = Math.floor(power / 2); // halve the power
    }

    return n < 0 ? 1 / ans : ans;
};
```

## Explanation of Each Line
1. `let power = Math.abs(n);`  → Work with positive exponent first.
2. `let ans = 1;`             → Initialize result.
3. `while (power > 0)`        → Loop until all powers are handled.
4. `if (power % 2 === 1)`    → If current power is odd, multiply `ans` by `x`.
5. `ans *= x;`                → Include the odd `x` in the result.
6. `x *= x;`                  → Square the base for next iteration.
7. `power = Math.floor(power / 2);` → Reduce power by half.
8. `return n < 0 ? 1 / ans : ans;` → If original n was negative, return reciprocal.

## Dry Run Example: 2^7
| Step | ans | x  | power |
|------|-----|----|-------|
| 0    | 1   | 2  | 7     |
| 1    | 2   | 4  | 3     |
| 2    | 8   | 16 | 1     |
| 3    | 128 | 256| 0     |

Final answer: 128

## Key Points
- **Odd power** → move one `x` into `ans`
- **Square `x`** → handle the remaining powers in pairs
- **Half the power** → r