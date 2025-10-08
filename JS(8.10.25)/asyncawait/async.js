async function greet() {    /* asynchronous function */
  return "Hello, Async World!";
}

greet().then(msg => console.log(msg)); /* 3️⃣ Using .then()

Because greet() returns a Promise, you can use .then() to handle the value when the Promise resolves */
