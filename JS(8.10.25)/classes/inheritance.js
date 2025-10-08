class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks!`);
  }
}

let dog1 = new Dog("Buddy");
dog1.speak(); // Buddy makes a sound.
dog1.bark();  // Buddy barks!


/* Explanation:

Dog inherits all properties and methods of Animal.

You can add extra methods like bark(). */