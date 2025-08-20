# Reverse Integer - README

This project provides a solution to the **Reverse Integer** problem from
LeetCode.\
The function `reverse(x)` takes an integer `x` as input, reverses its
digits,\
and returns the reversed integer. If the reversed integer overflows a
32-bit\
signed integer range, it returns `0`.

## JavaScript Solution

``` javascript
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const sign = x < 0 ? -1 : 1;
    const string = x.toString();
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    let result = sign * parseInt(reverse);
    if (result < -(2**31) || result > (2**31 - 1)) {
        return 0;
    }
    return result;
};
```

## Explanation

1.  Determine the sign of the number.\
2.  Convert the number to a string and reverse it.\
3.  Parse the reversed string back to an integer and reapply the sign.\
4.  Check for 32-bit signed integer overflow. If overflow occurs, return
    0.\
5.  Otherwise, return the reversed integer.
