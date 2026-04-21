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

function evenNumbers(numbers) {
  const evenNums = [];

  for (const num of numbers) {
    if (num % 2 === 0) {
      evenNums.push(num);
    }
  }

  let sum = 0;

  for (const even of evenNums) {
    sum += even;
  }
  const count = evenNums.length;
  const average = sum / count;
  return average;
}

const num = [2, 3, 4, 5, 6];
console.log(evenNumbers(num));
