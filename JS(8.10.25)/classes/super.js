class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name);  // Calls parent constructor (Animal)
    this.color = color;
  }

  speak() {
    super.speak(); // Calls parent method
    console.log(`${this.name} meows and is ${this.color} in color.`);
  }
}

let cat1 = new Cat("Whiskers", "white");
cat1.speak();


/* Explanation:

You don’t need to create an object to call static methods.

You call them directly using the class name. */