class Person {
  constructor(name, age) {
    this.name = name;   // property
    this.age = age;     // property
  }

  greet() {             // method
    console.log(`Hello, my name is ${this.name} and I’m ${this.age} years old.`);
  }
}

let person1 = new Person("Subasri", 22);
person1.greet();


/* Explanation:

class Person {} defines a blueprint.

constructor() runs automatically when a new object is created.

this refers to the current instance (object created).

new Person("Alice", 25) creates a new instance.

.greet() calls the method inside the class. */