const computer = {
  brand: "lenovo",
  price: 35000,
  processor: "intel",
  ssd: "512gb",
};

const keys = Object.keys(computer);
console.log(keys);
Output: ["brand", "price", "processor", "ssd"];

const values = Object.values(computer);
console.log(values);

Output: ["lenovo", 35000, "intel", "512gb"];

const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

const profileKeys = Object.keys(profile);
const hasName = profileKeys.includes("name");
console.log(hasName);

Output: true;

if ("email" in profile) {
  console.log("email exists");
} else {
  console.log("No email. No Spam.");
}

// Output: No email. No Spam.

if (profile.hasOwnProperty("email")) {
  console.log("Email niye boroloki dekhai");
} else {
  console.log("Email Chara jibon");
}

// Output: Email Chara jibon

if (profile.city === "Dhaka") {
  console.log("Jam er sohor Dhaka.");
} else {
  console.log("Aram sob gram e.");
}

// Output: Jam er sohor Dhaka.

const person = {
  name: "Alice",
  age: 25,
  country: "Bangladesh",
};

const entries = Object.entries(person);
console.log(entries);
Output: [
  ["name", "Alice"],
  ["age", 25],
  ["country", "Bangladesh"],
];

const profile = {
  name: "Rahim",
  age: 28,
  city: "Dhaka",
};

for (const key in profile) {
  const value = profile[key];
  console.log(key, value);
}

// Output:
// name Rahim
// age 28
// city Dhaka
