// function oddAverage(numbers) {
//   for (const number of numbers) {
//     // console.log(number);
//   }
// }

// const nums = [12, 13, 65, 11, 24, 31];
// oddAverage(nums);

// Output: 12 13 65 11 24 31

// function oddAverage(numbers) {
//   const odd = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odd.push(number);
//     }
//   }
//   console.log(odd);
// }
// const num = oddAverage([2, 3, 4, 5, 6]);

// function oddAverage(numbers) {
//   const odds = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       odds.push(number);
//     }
//   }
//   console.log(odds);
// }

// const nums = [12, 13, 65, 11, 24, 31];
// const oddNumberAvg = oddAverage(nums);

// Output: [13, 65, 11, 31];

// function oddNumbersAvg(numbers) {
//   const odd = [];

//   for (let num of numbers) {
//     if (num % 2 === 1) {
//       odd.push(num);
//     }
//   }
//   let sum = 0;

//   //   console.log(odd);

//   for (const num of odd) {
//     sum += num;
//   }
//   //   console.log(sum);

//   const length = odd.length;

//   const ovg = sum / length;
//   return parseInt(ovg);
// }
// console.log(oddNumbersAvg([2, 34, 4, 6]));

// when is not belong its value. its return null

// HW ..........................

// 1

// function evenNumbers(numbers) {
//   const evenNums = [];

//   for (const num of numbers) {
//     if (num % 2 === 0) {
//       evenNums.push(num);
//     }
//   }

//   let sum = 0;

//   for (const even of evenNums) {
//     sum += even;
//   }
//   const count = evenNums.length;
//   const average = sum / count;
//   return average;
// }

// const num = [1, 2, 3, 4, 5, 6];
// console.log(evenNumbers(num));

// 2

// function oddNumbers(numbers) {
//   const oddNums = [];
//   for (const num of numbers) {
//     if (num % 2 === 1) {
//       oddNums.push(num);
//     }
//   }
//   console.log(oddNums);
//   const newArray = [];
//   for (const mult of oddNums) {
//     const result = mult * 2;
//     // result.push(newArray);
//     newArray.push(result);
//   }

//   console.log(newArray);
// }
// const num = [4, 5, 67, 7, 3, 12];

// 3

// function oddNumbers(numbers) {
//   for (const odd of numbers) {
//     if (numbers % 2 === 1) {
//       return "Odd Numbers found";
//     }
//   }
//   return "No Odd numbers found";
// }
// console.log(oddNumbers([4, 5, 8]));

// or

// function oddNumbers(numbers) {
//   for (const num of numbers) {
//     if (num % 2 === 1) {
//       return "Odd numbers found";
//     }
//   }
//   return "No odd numbers found";
// }

// const num = [4, 6, 8, 10];
// console.log(oddNumbers(num)); // No odd numbers found

// const num2 = [4, 5, 6];
// console.log(oddNumbers(num2)); // Odd numbers found

// function plus1Odd(numbers) {
//   let oddNumbers = [];

//   for (const odd of numbers) {
//     if (odd % 2 === 1) {
//       oddNumbers.push(odd);
//     }
//   }
//   //   console.log(oddNumbers);
//   let newArray = [];
//   for (const plus1 of oddNumbers) {
//     const plusOne = plus1 + 1;
//     // return plusOne;
//     // console.log(plusOne);
//     newArray.push(plusOne);
//   }
//   //   return newArray;

//   const sortArray = newArray.sort((a, b) => b - a);
//   return sortArray;
// }
// const num2 = [4, 9, 6, 11];

// console.log(plus1Odd(num2));
