const product = {
  productName: "Computer",
  price: 599.99,
};

for (property in product) {
  console.log(product[property]);
}
// example
const user = {
  username: "username",

  password: "password",

  firstName: "firstName",

  lastName: "lastName",
};
for (property in user) {
  console.log(user[property]);
}
