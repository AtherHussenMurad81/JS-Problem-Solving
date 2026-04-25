// //three dot to reveal in rest operator(...)// its used for function, array and object
// //  facilities

// const [first, second, ...rest] = [10, 20, 30, 40, 50];
// // console.log(first);
// // console.log(second);
// // console.log(rest);

// // Output: 10;
// //       : 20
// // array hisabe nibe [(30, 40, 50)];

// const person = { name: "Alice", age: 25, city: "Dhaka", country: "Bangladesh" };
// const { name, city, ...details } = person;
// // console.log(name);
// // console.log(city);
// // console.log(details);

// // Output:
// // Alice
// // Dhaka
// // { age: 25, country: 'Bangladesh' }

// function multiply(multiplier, ...numbers) {
//   console.log(numbers);
// }

// multiply(1, 2, 3, 4);
// // [2, 3, 4];
// multiply(5, 6, 7, 8);
// // [6, 7, 8];

// const products = {
//   name: "pc",
//   price: 500,
//   brand: "dell",
// };

// const { name, ...newArray } = products;
// console.log(name, ...products);

// console.log(newArray);

// 2
// const project = {
//   id: 101,
//   title: "Web App",
//   budget: 3000,
//   client: "PH_Group",
// };
// const { title, ...seprateObj } = project;
// console.log(seprateObj);

// 3

// const programmer = {
//   name: "murad",
//   language: "JS",
//   experience: 5,
//   specially: "Full Stack",
//   tools: "NEXT.JS",
// };
// const { language, specially, ...details } = programmer;

// console.log(language, specially, programmer);

// 4
// const array = [10, 20, 30, 2, 400, 20000];

// // const
// const [first, second, ...third] = array;
// console.log(third);

// function array(a, b, ...c) {
//   //   console.log(a, b, c);
//   console.log(c);
// }
// array(2, 4, 5, 6, 7);
// function array(...num) {
//   let sum = 0;
//   for (let n of num) {
//     console.log(n);
//     sum += n;
//   }
//   console.log(sum);
// }

// array(1, 3, 2, 4);
