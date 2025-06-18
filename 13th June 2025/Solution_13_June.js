var prompt=require('prompt-sync')();

// 1. Print numbers from 1-10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print all even numbers from 1-20

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Print squares of numbers between 1-5

for (let i = 1; i <= 5; i++) {
  console.log(i * i);
}

// 4. Printing sum of numbers from 1-100

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is:", sum);

// 5. Print the multiplication table

let numm=prompt('Enter a number : ')
for (let i = 1; i <= 10; i++) {
  console.log(i*numm);
  i++;
}

// 6. Print numbers from 1-10 in reverse order

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 7. Print only odd numbers between 15-30

for (let i = 15; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 8. Print factorial of a number 

let num=prompt('Enter a number : ')
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log("Factorial : ", factorial);

// 9.Print numbers between 1-50 which are divisible by 3 and 5 both

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// 10. Count how many numbers between 1-100 are divisible by 9

let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 9 === 0) {
    count++;
  }
}
console.log("Numbers divisible by 9 between 1 and 100:", count);
