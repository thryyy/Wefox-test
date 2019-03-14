// Palindrome.js
// File created by Thomas Gobin for Wefox

function Palindrome(string) {
    // Convert toLowerCase and keep only alphabetical & numerical characters
    var cleanedString = string.toLowerCase().match(/[a-z0-9]/g).join("");
    // Create the reversed string
    var reversedString = cleanedString.split("").reverse().join("");

    if (cleanedString === reversedString) {
    // Check if the reversed string is equal to the initial string
        return string + " is a palyndrome.";
    } else {
        return string + " is not a palyndrome.";
    }
}

console.log(Palindrome("1234321")); //yes
console.log(Palindrome("Race Car.")); //yes
console.log(Palindrome("Are we not pure? “No sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man; a prisoner up to new era.")); //yes
console.log(Palindrome("YIYcbvhveuc%$*êff  fzife")); //no
