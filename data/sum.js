// Variables and Data Types
let number = 42;
const string = 'Hello, World!';
var oldVariable = "I'm using 'var'.";

// Arrays and Objects
const myArray = [1, 2, 3];
const myObject = { key: 'value', anotherKey: 123 };

// Functions
function add(a, b) {
  return a + b;
}

// Arrow Functions
const multiply = (x, y) => x * y;

// Conditional Statements
if (number > 50) {
  console.log('Number is greater than 50');
} else if (number < 30) {
  console.log('Number is less than 30');
} else {
  console.log('Number is between 30 and 50');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// Template Literals
const name = 'Alice';
console.log(`Hello, ${name}!`);

// Arrays Methods
const fruits = ['apple', 'banana', 'cherry'];
fruits.push('date');
fruits.pop();

// Objects Methods
myObject.newKey = 'new value';
delete myObject.anotherKey;

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

// Classes and Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.speak();
