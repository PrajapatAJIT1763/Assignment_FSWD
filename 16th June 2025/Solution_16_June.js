// STRING QUESTIONS


// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
// console.log(reverseString("hello"));

// 2. Check Palindrome (case-insensitive)
function isPalindrome(str) {
  const cleanStr = str.toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}
// console.log(isPalindrome("Madam"));

// 3. Count Vowels
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return [...str].filter(char => vowels.includes(char)).length;
}
// console.log(countVowels("JavaScript"));

// 4. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
// console.log(capitalizeWords("hello world"));

// 5. Character Frequency
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
// console.log(charFrequency("aabbbc"));


// ARRAY QUESTIONS


// 1. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// 2. Flatten an Array (1 level deep)
function flattenArray(arr) {
  return arr.flat();
}
// console.log(flattenArray([[1, 2], [3, 4], [5]]));

// 3. Find Max and Min
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr)
  };
}
// console.log(findMaxMin([4, 1, 9, -2]));

// 4. Sum of Even Numbers
function sumEven(arr) {
  return arr.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);
}
// console.log(sumEven([1, 2, 3, 4, 5, 6]));

// 5. Group by Type
function groupByType(arr) {
  const grouped = {};
  arr.forEach(item => {
    const type = typeof item;
    if (!grouped[type]) {
      grouped[type] = [];
    }
    grouped[type].push(item);
  });
  return grouped;
}
// console.log(groupByType([1, 'a', true, 2, 'b']));

