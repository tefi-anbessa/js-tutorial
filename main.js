let Phrase = require("tefi-palindrome");
let string = prompt("Please enter a string for palindrome testing:");
let test = new Phrase(string);
if (test.palindrome()) {
  alert(`Yay! "${test.content}" is a palindrome!`);
} else {
  alert(`No, "${test.content}" is not a palindrome.`);
};
