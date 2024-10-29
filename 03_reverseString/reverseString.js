function reverseString(str) {
    // Convert the string to an array, reverse it, and join it back to a string
    return str.split('').reverse().join('');
}

reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.")
reverseString("")

// Do not edit below this line
module.exports = reverseString;
