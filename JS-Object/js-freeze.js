// const person = { name: "Alice", age: 25, country: "Bangladesh" };
// delete person.age;
// console.log(person);

// Output: { name: 'Alice', country: 'Bangladesh' }

// const nafiInto = {
//   name: "bandori",
//   age: 24,
//   isStudent: true,
//   isFerot: false,
// };
// delete nafiInto.isFerot;

// console.log(nafiInto);

// const adminUser = {
//   username: "admin",
//   email: "ah.murad020@gmail.com",
//   role: "superAdmin",
// };
// Object.freeze(adminUser);
// console.log(adminUser);
// adminUser.role = "user";
// adminUser.password = "123456";
// delete adminUser.email;
// console.log(adminUser);
// const user = {
//   username: "johndoe",
//   email: "john.doe@example.com",
//   password: "oldpassword",
// };

// Object.seal(user); // Attempt to modify the object

// user.password = "newpassword"; // Allowed
// user.age = 30; // adding new property is not allowed
// delete user.email; // deleting property is not allowed

// console.log(user);

// Output: {username: 'johndoe', email: 'john.doe@example.com', password: 'newpassword'}

// const book = {
//   title: "harry potter",
//   author: " JK rowling",
//   pages: 500,
// };
// Object.seal(book)
// Object.freeze(book);
// delete book.title;

// book.author = "murad";
// console.log(book);
