function add(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
};

const add3 = (a, b) => a + b;

console.log(add(5, 3));  // 8
console.log(add2(5, 3)); // 8
console.log(add3(5, 3)); // 8

function greet(name = "friend") {
  return `Hello, ${name}`;
}

console.log(greet());       // Hello, friend
console.log(greet("Ada"));  // Hello, Ada