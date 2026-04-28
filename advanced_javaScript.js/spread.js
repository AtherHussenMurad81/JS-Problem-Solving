// // const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
// // const arrayMax = Math.max(numbers);
// // console.log(arrayMax);

// // Output: NaN;
// //* Math.max array recieve kore na.. only parameter    receive kore. jar karone ekane NaN output pelam

// const array = [8, 34, 5, 6, 7, 3, 533, 67, 5, 2];
// // console.log(array, "9");
// const spread = [...array];
// // console.log(spread);
// const max = Math.max(...array); //* speared oparator er maddome array take bisiya diyesi. jar jonno output max nmbr aise
// // console.log(max);

// .............

// const friend = [4, 0.5, 6, 7];
// const bomndu = friend;

// console.log(" 20 nmbr lines", friend);

// bomndu.push(12);

// console.log(bomndu);

//  ,,,,,,,,,,,,,,,,,,,,

// const friends = [4, 5, 87, 9];
// const dosto = [...friends];
// console.log(dosto);
// friends.push(100);
// console.log(dosto);
// console.log(friends);

// console.log(friends);

// Output: [4, 5, 87, 9][(4, 5, 87, 9)][(4, 5, 87, 9, 100)];

// .........

// const friends = [4, 23, 56, 5, 73, 53, 78];

// const spread = [...friends, 999999999];

// console.log(spread);
// console.log(friends); // spread er man asbe na friends ye.. spreadn only spread oparator er aise

// .......

// const fruits = ["Apple", "Banana"];
// const moreFruits = ["Mango", ...fruits, "Orange"];
// console.log(fruits);
// console.log(moreFruits);
// Output: ["Mango", "Apple", "Banana", "Orange"];

// .....
// const array1 = [1, 2];
// const array2 = [3, 4];
// const combinedArray = [...array1, ...array2];
// console.log(combinedArray);
// Output: [1, 2, 3, 4];

// ,,,,,,,,,

const student = { name: "Rafi" };
const updatedStudent = { ...student, age: 22 };
// console.log(updatedStudent);

// Output: { name: "Rafi", age: 22 }

// ........................... HW.................
