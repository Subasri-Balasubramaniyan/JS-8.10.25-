⚙️ 1. Async / Await
🧠 What It Is

async and await make it easier to work with promises.
They allow asynchronous code to look and behave like synchronous code — cleaner and easier to read.

🔹 Syntax
async function myFunction() {
  let result = await somePromise();
  console.log(result);
}


async makes a function return a Promise.

await pauses the function until the Promise is resolved or rejected.

🧩 Example 1: Basic Async Function
async function greet() {
  return "Hello, Async World!";
}

greet().then(msg => console.log(msg));


Explanation:

The function returns a Promise that resolves with "Hello, Async World!".

.then() handles the resolved value and prints it.

Output:

Hello, Async World!

🧩 Example 2: Using await Inside an Async Function
async function fetchData() {
  console.log("Fetching data...");
  let data = await new Promise(resolve => {
    setTimeout(() => resolve("Data received!"), 2000);
  });
  console.log(data);
}

fetchData();


Output:

Fetching data...
(Data received after 2 seconds)
Data received!


✅ The function waits for the promise to finish before moving to the next line.

🧩 Example 3: Error Handling
async function getUser() {
  try {
    let response = await fetch("https://invalid-url.com");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

getUser();


✅ Errors are caught using try...catch, just like normal synchronous code.

🧩 Example 4: Running Multiple Tasks Concurrently
async function taskOne() {
  return new Promise(resolve => setTimeout(() => resolve("Task 1 done"), 2000));
}

async function taskTwo() {
  return new Promise(resolve => setTimeout(() => resolve("Task 2 done"), 1000));
}

async function runTasks() {
  console.log("Running tasks...");
  let results = await Promise.all([taskOne(), taskTwo()]);
  console.log(results);
}

runTasks();


Output:

Running tasks...
["Task 1 done", "Task 2 done"]


✅ Both tasks run simultaneously, saving time!

📘 Quick Recap
Keyword	Meaning	Example
async	Makes a function return a Promise	async function fetchData() {}
await	Waits for a Promise to resolve	let data = await fetch()
try...catch	Handles async errors	try { await fetch() } catch(e) {}
Promise.all()	Runs multiple async tasks concurrently	await Promise.all([...])
🏗️ 2. Classes
🧠 What It Is

A class is a blueprint for creating objects.
It helps you organize code logically using constructors, methods, inheritance, and static methods — similar to object-oriented programming (OOP).

🔹 Basic Syntax
class ClassName {
  constructor() {
    // initialization code
  }
  
  methodName() {
    // method code
  }
}

🧩 Example 1: Basic Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

let person1 = new Person("Alice", 25);
person1.greet();


Output:

Hello, my name is Alice.


✅ constructor() runs automatically when you create a new object using new.

🧩 Example 2: Inheritance (extends)
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
dog1.speak();
dog1.bark();


Output:

Buddy makes a sound.
Buddy barks!


✅ Dog inherits from Animal using extends.

🧩 Example 3: Using super
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
    super(name);  // calls parent constructor
    this.color = color;
  }

  speak() {
    super.speak(); // calls parent method
    console.log(`${this.name} meows and is ${this.color}.`);
  }
}

let cat1 = new Cat("Whiskers", "white");
cat1.speak();


Output:

Whiskers makes a sound.
Whiskers meows and is white.

🧩 Example 4: Static Methods
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtil.add(5, 10));  // 15


✅ static methods belong to the class itself, not to individual objects.

🧩 Example 5: Full Example
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
    super("Bike", brand);
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


Output:

Yamaha Bike started.
Yamaha R15 is ready to ride!
All bikes are tested and verified by AutoCorp.

📘 Quick Recap
Concept	Keyword	Purpose	Example
Class	class	Blueprint for objects	class Vehicle {}
Constructor	constructor()	Initializes object	constructor(name)
Inheritance	extends	Inherit from parent class	class Bike extends Vehicle
Super	super()	Call parent constructor/method	super(name)
Static	static	Class-level method	static add(a,b)
💡 Final Thoughts

Use async/await for clean and readable asynchronous code.

Use classes to organize and structure your programs logically.

Both make JavaScript code more modern, maintainable, and elegant.
