var prompt=require('prompt-sync')();

// 1. Even and Odd 
let num1 = parseInt(prompt("Enter a number:"));
if (num1 % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// 2. Check for Positive/Negative/Zero

let num2 = parseFloat(prompt("Enter a number:"));
if (num2 > 0) {
  console.log("Positive");
} else if (num2 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// 3. Age verification

let age = parseInt(prompt("Enter your age:"));
if (age >= 18) {
  ("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// 4. Check if given number is in range of 10-20

let num4 = parseInt(prompt("Enter a number:"));
if (num4 >= 10 && num4 <= 20) {
  console.log("In range");
} else {
  console.log("Out of range");
}

// 5. Check if number is >,< or == 

let a = parseInt(prompt("Enter first number:"));
let b = parseInt(prompt("Enter second number:"));

if (a === b) {
  console.log("Both numbers are equal");
} else if (a > b) {
  console.log("First number is greater");
} else {
  console.log("Second number is greater");
}

// 6. Check marks and give grade

let score = parseInt(prompt("Enter your score (0-100):"));

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// 7. Check if number is divisible by 5 and 11 both or not

let num7 = parseInt(prompt("Enter a number:"));

if (num7 % 5 === 0 && num7 % 11 === 0) {
  console.log("The number is divisible by both 5 and 11");
} else {
  console.log("The number is not divisible by both 5 and 11");
}

// 8. Find largest among three numbers

let n1 = parseInt(prompt("Enter first number:"));
let n2 = parseInt(prompt("Enter second number:"));
let n3 = parseInt(prompt("Enter third number:"));

if (n1 >= n2 && n1 >= n3) {
  console.log("Largest number is: " + n1);
} else if (n2 >= n1 && n2 >= n3) {
  console.log("Largest number is: " + n2);
} else {
  console.log("Largest number is: " + n3);
}

// 9. Check if input year is leap year or not

let year = parseInt(prompt("Enter a year:"));

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is not a Leap Year");
}

// 10. Check for vowel and consonant

let char = prompt("Enter a single alphabet letter:").toLowerCase();

if (char.length !== 1 || !/[a-z]/.test(char)) {
  console.log("Please enter a valid single alphabet letter.");
} else if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
