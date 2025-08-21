# Palindrome Checker in JavaScript

This project provides a simple JavaScript function to check whether a
given string is a **palindrome**.\
It ignores case sensitivity, spaces, and non-alphanumeric characters
(punctuation, symbols, etc.).

## Function Explanation

``` js
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Convert to lowercase and remove all non-alphanumeric characters
    let splittedText = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    
    // Reverse the cleaned string
    let palindrome = "";
    for(let i = splittedText.length - 1; i >= 0; i--) {
        palindrome += splittedText[i];
    }

    // Compare the cleaned string with its reversed version
    return splittedText === palindrome;
};
```

### Key Line Breakdown

``` js
let splittedText = s.toLowerCase().replace(/[^a-z0-9]/g,"");
```

-   **`s.toLowerCase()`** → Converts the string to lowercase
    (case-insensitive check).\
-   **`.replace(/[^a-z0-9]/g, "")`** → Removes all characters that are
    **not letters or numbers**.
    -   `[^a-z0-9]` = match anything that's not a letter (`a-z`) or
        number (`0-9`).\
    -   `g` = global flag, so it applies to the whole string.

Example:

    "A man, a plan, a canal: Panama"
     → "amanaplanacanalpanama"

## Example Usage

``` js
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
```

## License

This project is free to use for educational purposes.
