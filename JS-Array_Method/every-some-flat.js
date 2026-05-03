// // ? some

// // const scores = [30, 45, 55, 80, 90];
// // const hasPassed = scores.some((score) => score >= 50); //* jekuno ekta condition true hole true return kore
// // console.log(hasPassed);
// // Output: true;
// // ? Every method
// const scores = [60, 50, 55, 80, 90];
// const allPassed = scores.every((score) => score >= 50);
// //* every method ye shob gula items true hole tobei true return kore
// console.log(allPassed);
// // Output: true;

// // ?flat method

// const nested = [1, 2, [3, 4, [5, 6]]];
// const flattened = nested.flat(2);
// console.log(flattened); //* nested array clear kore
// // Output: [1, 2, 3, 4, 5, 6];

const number = [50, 45, 15, 46, 81, 102];
const upto100 = number.some((num) => num > 100);
// console.log(upto100);

const divNumbers = [545, 15, 15, 70, 60, 15, 880];

const div5 = divNumbers.every((number) => number % 5 === 0);
// console.log(div5);

const names = ["world", "worldB", "worldC", "worldD", "worldE"];
const hello = "hello";

const someString = names.some((same) => same.length === hello.length);
console.log(someString);
