class Product {
  constructor() {
    this.productName = "";
    this.productPrice = 0;
  }

  printProduct() {
    console.log(this.productName + " " + this.price);
  }
}

var prod = new Product();
prod.productName = "test";
prod.price = 199.99;
prod.printProduct();

//example
class User {
  constructor() {
    this.username = "";

    this.password = "";

    this.firstName = "";

    this.lastName = "";
  }

  printProduct() {
    console.log(
      this.username +
        " " +
        this.password +
        " " +
        this.firstName +
        " " +
        this.lastName
    );
  }
}

var user = new User();

user.username = "username";

user.password = "password";

user.firstName = "firstName";

user.lastName = "lastName";

user.printProduct();
