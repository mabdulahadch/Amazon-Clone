function processArray(arr, callbackFunction) {
  return callbackFunction(arr);
}

function doubleFunction(arr) {
  let double = [];
  for (let i = 0; i < arr.length; i++) {
    double.push(arr[i] * 2);
  }
  return double;
}

function squareFunction(arr) {
  let square = [];
  for (let i = 0; i < arr.length; i++) {
    square.push(arr[i] * arr[i]);
  }
  return square;
}

const arr = [10, 5, 8, 2, 6];
console.log("Double the array = ", processArray(arr, doubleFunction));
console.log("Square the array = ", processArray(arr, squareFunction));

// function greet(name, callback) {
//   // console.log("Hello, " + name);
//   setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);
//   callback();
// }

// function afterGreeting() {
//   console.log("How are you?");
// }

// greet("Ahad", afterGreeting);
