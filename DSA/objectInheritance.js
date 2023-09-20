class transport {
  constructor() {
    this.typeName = "";
    this.wheels = 0;
    this.maxSpeed = 0;
  }
}

class car extends transport {
  constructor() {
    super();
    this.fuel = 0;
  }
}

var car1 = new car();
car1.wheels = 4;
car1.typeName = "car";
car1.maxSpeed = 200;
car1.fuel = 40;

console.log(car);

// examples
class User {
  constructor() {
    this.username = "";

    this.password = "";

    this.firstName = "";

    this.lastName = "";
  }
}
class SuperUser extends User {
  constructor() {
    super();

    this.admin = 1;
  }
}
var user = new SuperUser();

user.username = "admin";

console.log(user.username);

console.log(user.admin);
