const person = {
  name: "sodor uddain",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
};

console.log(person.profession);
// Output: developer;
const person = {
  name: "sodor uddain",
  age: 25,
  profession: "developer",
  salary: 25000,
  married: true,
  "fav places": ["bandarban", "saintmartin", "kuakata"],
};

console.log(person["married"]);
console.log(person["fav places"]);
Output: true[("bandarban", "saintmartin", "kuakata")];
const propertyName = "profession";
console.log(person[propertyName]);
Output: developer;
const cricketer = {
  position: 4,
  specialty: "batter",
  age: 24,
  runs: 8000,
};

console.log(cricketer.position);
console.log(cricketer["runs"]);
cricketer.position = 1;
cricketer["runs"] = 9000;
console.log(cricketer["position"]);
console.log(cricketer.runs);

Output: 4;
8000;
1;
9000;
const college = {
  name: "vnc",
  class: ["11", "12"],
  events: ["science fair", "bijoy dibos", "21 feb"],
  unique: {
    color: "blue",
    result: {
      gpa: 5,
      merit: "top",
    },
  },
};

console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.events[2]);
