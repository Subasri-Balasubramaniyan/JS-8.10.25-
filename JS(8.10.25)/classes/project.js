class Vehicle {
  constructor(type, brand) {
    this.type = type;
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} ${this.type} started.`);
  }
}

class Bike extends Vehicle {
  constructor(brand, model) {
    super("Bike", brand);      /* The constructor runs when you create a new Bike....super("Bike", brand) calls the parent class (Vehicle) constructor. */
    this.model = model;
  }

  start() {
    super.start();
    console.log(`${this.brand} ${this.model} is ready to ride!`);
  }

  static companyInfo() {
    console.log("All bikes are tested and verified by AutoCorp.");
  }
}

let bike1 = new Bike("Yamaha", "R15");
bike1.start();

Bike.companyInfo();
