// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function giveDirections(streetName) {
  const address = streetName;
  console.log(`${streetName} is easy to get to, I'll give you directions`);
  function fromNorth(){
    console.log(`${address} is the second left turn after the main stoplight in town.`);
  }
}

giveDirections("pineapple street");

// ==== Challenge 2: Create a counter function ====
// const counter = () => {
//   let count = 0;
//   function() {
//     count ++;
//     return count;
//   }
//   console.log(count);
  // Return a function that when invoked increments and returns a counter variable.
// };

// const newCounter() = counter();
// newCounter();


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
