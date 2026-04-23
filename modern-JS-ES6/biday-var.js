function add(num1, num2) {
  const result = num1 + num2;
  console.log(num1, num2, result);
  return result;
}

const sum = add(5);
console.log(sum);

// Output:

//   5 undefined NaN
//   NaN
