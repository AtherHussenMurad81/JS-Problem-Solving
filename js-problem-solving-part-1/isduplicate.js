const getDup = (numbers) => {
  const get = [];
  const isDup = [];
  for (let i of numbers) {
    if (get.includes(i)) {
      if (!isDup.includes(i)) {
        isDup.push(i);
      }
    } else {
      get.push(i);
    }
  }

  return isDup;
};
console.log(getDup([2, 5, 4, 6, 5, 6]));
