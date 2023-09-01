console.log("hello 1");

console.log("hello 2");

setTimeout(() => {
  console.log("this message is from set time out");
}, 0);

setImmediate(() => {
  console.log("This code is from set immediate");
});

console.log("hello 3");

console.log("hello 4");
