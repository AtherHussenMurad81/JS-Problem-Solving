// function double(numbers) {
//   const doubled = [];

//   for (let num of numbers) {
//     const value = num * 2;

//     doubled.push(value);
//   }
//   return doubled;
// }

// console.log(double([1, 2, 3, 2, 545, 5, 6]));

// ..........

// const mapnum = (numbers) => {
//   const result = numbers.map((number) => console.log(number * 2));
// };
// mapnum([2, 3, 567]);

// .........

// const friends = ["Tom", "Jhon", "Micheal", "Oliver"];
// const lengths = friends.map((frnd) => frnd.length);
// const firstLetters = friends.map((friend) => friend[0]);
// console.log(lengths, "length");
// console.log(firstLetters);

// Output: [3, 4, 7, 6][("T", "J", "M", "O")];
// const numbers = [1, 5, 6, 4, 15];
// const result = numbers.forEach((n) => console.log(n)); //foreEach kuno kisu return kore na
// undefine dekabe console korle

// console.log(result);

// Output: 1;
// 5;
// 6;
// 4;
// 15;
// undefined;

//  filter

// const players = [75, 65, 67, 71, 55, 59];
// const selected = players.filter((p) => p > 70);
// console.log(selected);

// Output: [75, 71];

// const friends = ["tom", "john", "micheal", "oliver", "tim", "joshna"];

// const smallName = friends.filter((f) => f.length <= 4);
// console.log(smallName);

// Output: ["micheal", "oliver", "joshna"];

// find and findIndex

// const players = [75, 65, 67, 60, 71, 55, 59];
// const selected = players.find((player) => player > 70); //* find one kind of filter. but, find only 1st value return of his condition
// console.log(selected);

// Output: 75;

// const numbers = [10, 25, 30, 50];
// const index = numbers.findIndex((num) => num > 27);
// console.log(index);
// Output: 2;

// const veryBig = numbers.findIndex((num) => num > 100); //* findIndex gives there index number when the condition is true. but, if there are no match of this condition return -1
// console.log(veryBig);

// Output: -1;

// const students = [
//   { name: "John", age: 20 },
//   { name: "Adam", age: 22 },
//   { name: "Tom", age: 19 },
//   { name: "Lucy", age: 21 },
// ];

// const studentInfo = students.map((student, index, array) => {
//   return `${student.name}, ${index + 1} of ${array.length} students.`;
// });
// console.log(studentInfo);

// Output: [
//   "John, 1 of 4 students.",
//   "Adam, 2 of 4 students.",
//   "Tom, 3 of 4 students.",
//   "Lucy, 4 of 4 students.",
// ];

//* ......HW......../////////////////
//* 1
// const numbers = [30, 45, 20, 60, 10];

// const plus13 = numbers.map((num) => console.log(num + 13));

//* 2

// const playes = ["massi", "maraduna", "pale", "Zidane", "Ronaldo"];

// const minName = playes.filter((cuto) => cuto.length > 5);

// console.log(minName);

// * 3

// const numList = [10, 20, 15, 25, 30, 35];
// const findRes = numList.find((n) => n > 20);
// console.log(findRes);

// *

const numList = [10, 20, 15, 25, 30, 35];

// const div = numList.map((num) => console.log(num / 3));

// console.log(div);

// * 4;

// const playes = ["massi", "maraduna", "pale", "Zidane", "Ronaldo"];

// const result = playes.map((n) => n[2]);

// console.log(result);

// * 5

// const playes = ["massi", "maraduna", "pale", "Zidane", "Ronaldo"];

// const playerName = playes.find((p) => p[0] === "m");
// console.log(playerName);

// * 6 and 7

const playes = ["massi", "maraduna", "pale", "Zidane", "Ronaldo"];

playes.forEach((p) => console.log(p));
