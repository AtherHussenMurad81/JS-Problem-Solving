// function sumOfNumbers() {}
// const result = sumOfNumbers();
// console.log(result);

// Output: undefined;
// function sumOfNumbers(numbers) {
//   console.log(numbers); // output its
// }

// const result = sumOfNumbers([12, 45, 6, 8, 14]);
// console.log(result); // its gives me undefine

// Output: [12, 45, 6, 8, 14];
// undefined;

// function sumOfNumbers(numbers) {
//   for (const number of numbers) {
//     console.log(number);
//   }
// }

// const result = sumOfNumbers([12, 45, 6, 8, 14]);
// console.log(result); // its gives me undefine

// Output: 2;
// 45;
// 6;
// 8;
// 14;
// undefined;

// function sumOfNumber(numbers) {
//   let sum = 0;

//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// const num = [54, 324, 23, 1, 24, 45];

// const total = sumOfNumber(num);
// console.log("Sum of the numbers is ", total);

// ..................HW................//////

// 1.

// function oddNum(odd) {
//   let sum = 0;
//   for (let n of odd) {
//     if (n % 2 == 1) {
//       sum += n;
//     }
//   }
//   return sum;
// }
// const numbers = [1, 3, 5, 6];

// console.log(oddNum(numbers));

// function sumOdd(numbers) {
//   let sum = 0;

//   for (let n of numbers) {
//     sum += n;
//   }
//   return sum;
// }
// console.log(sumOdd([1, 2, 3]));

// function smallNum(numbers) {
//   let smallNumber = numbers[0];
//   for (const number of numbers) {
//     if (number < smallNumber) {
//       smallNumber = number;
//     }
//   }
//   return smallNumber;
// }

// console.log(smallNum([10, 3, 45, -1]));

// 3
// function myAge(numbers) {
//   if (numbers == 18) {
//     return 18;
//   } else if (numbers > 45) {
//     return 45;
//   } else {
//     return numbers;
//   }
// }
// console.log(myAge(78));

// 4.

// function div4(nums) {
//   let sum = 0;
//   for (let num of nums) {
//     if (num % 4 == 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }
// console.log(div4([2, 3, 4, 5, 6, 7, 8]));

// 6.

// function sumNagativeValue(numbers) {
//   let sum = 0;

//   for (let num of numbers) {
//     if (num < 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }
// console.log(sumNagativeValue([2, 1, 4, 5, 5, -2, -9]));
