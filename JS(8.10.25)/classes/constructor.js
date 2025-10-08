class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  show() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

let car1 = new Car("Tesla", "Model S");
car1.show();
