class Calculator {
  add(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
}

let calc = new Calculator();
console.log(calc.add(5, 3));       // 8
console.log(calc.multiply(4, 6));  // 24
