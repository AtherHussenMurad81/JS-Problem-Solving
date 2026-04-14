// argument is not a array. its just array like object. if i want a for in loop of this argument. i can do it
// //////////////////////

// function double(a) {
//   const doubled = a ** 2;
//   console.log(doubled);
// }
// console.log(double(2));

// function trible(a) {
//   const cube = a ** 3;
//   console.log("cube of", a, " is :", cube);
// }
// trible(2);

// function difference(num1, num2) {
//   const diff = num1 - num2;

//   console.log(num1, num2, "difference is ", diff);
// }
// const myAge = 22;

// const brotherAge = 13;

// difference(myAge, brotherAge);

// function addNumber(a, b) {
//   let sum = 0;
//   for (const num of arguments) {
//     sum += num;
//   }
//   console.log(sum);
// }

// addNumber(2, 4, 5, 5);

// ......................................
// ////////// HW///////////////
// 1.
// function summation(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }

// const fatherAge = 53;
// const myAge = 23;
// summation(fatherAge, myAge);

// 2.
// function multiple(a, b) {
//   const mul = a * b;
//   console.log(mul);
// }
// const cal1 = 3;
// const cal2 = 5;
// multiple(cal1, cal2);

// 3.
// const threeSum = (a, b, c) => {
//   const sum = a + b + c;
//   console.log(sum);
// };

// threeSum(4, 6, 7);

// 4
// function totalAge(pre, curr = 2025) {
//   const currentAge = curr - pre;
//   console.log(currentAge);
// }
// const birthDate = 2003;

// totalAge(birthDate);

// 5
// function butLaw(totalMoney) {
//   const perLaw = 35;

//   const totalBuyLow = totalMoney / perLaw;
//   const totalTaka = parseInt(totalBuyLow);
//   const givestaka = totalMoney % perLaw;
//   console.log(
//     totalTaka,
//     "ta kinte parbo ",
//     "and remaining money",
//     givestaka,
//     "taka",
//   );
// }
// butLaw(75);

// 6

// function average(a, b, c, d) {
//   let sum = 0;
//   for (let a of arguments) {
//     sum += a;
//     // console.log(a.length);
//   }
//   //   console.log(a.length);

//   const result = sum / arguments.length;
//   console.log("average of this arguments is: ", result);
// }
// average(1, 2, 3, 4);

// 7

// function sellingPrice(a) {
//   const perItemProfit = 250;
//   const sellPrice = a + perItemProfit;
//   console.log(sellPrice);
// }
// sellingPrice(250);

// 8
// function age100(a) {
//   const will100 = a + 100;
//   console.log("will be 100 years is ", will100);
// }
// age100(2000);

// 9

// function useMobile(a) {
//   //   const perdayUse = 8;
//   const totalUsed = a * 30;
//   console.log("useing mobile in this month", totalUsed);
// }
// useMobile(3);
