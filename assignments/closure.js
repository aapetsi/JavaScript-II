// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let addBy = 5
function addBy5(a, b) {
  return a + b + addBy
}

console.log(addBy5(5, 4))


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = (limit) => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  let count = 0;
  // 2- Declare a function `counter`. It should increment and return `count`.
  return function counter() {
    if (count < limit) {
      return count++
    } else {
      return count = 0;
      // return counter();
    }
  }

  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
};
// Example usage: 
const myCounter = counterMaker(5);
console.log(myCounter())
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 0

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  let counter = 0
  return {
    increment: function () {
      return counter++
    },
    decrement: function () {
      return counter--
    }
  }
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

const myCounterFactory = counterFactory()
console.log(myCounterFactory)
console.log(myCounterFactory.increment())
console.log(myCounterFactory.increment())
console.log(myCounterFactory.decrement())
console.log(myCounterFactory.increment())