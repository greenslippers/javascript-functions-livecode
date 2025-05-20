// const doubleTheNums = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr;
// };

// let list1 = [1, 2, 3, 4];
// console.log(doubleTheNums(list1));

// convert above function to an arrow function

const doubleTheNums = (arr) => {   // if a single param we can use arr without brackets
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

let list1 = [1, 2, 3, 4];
console.log(doubleTheNums(list1));


// Write a function that prints out "Good morning, class!"
const classGreeting = () => 'Good morning, class!';

classGreeting();


// Write a function that prints a random number (integer) between 1 and 100.

const randomNum = () => {
  const myNum = Math.floor(Math.random()*100) + 1;
  return myNum;
};

console.log(randomNum());


// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};

const powerFactory = () => {
  let powersOf2 =1; // initialize the power for each call

  return () => {
    const currPower = powersOf2;
    powersOf2 *= 2;
    return currPower;
  }
};

let pf1 = powerFactory();
console.log(pf1());
console.log(pf1());
console.log(pf1());





// (doMultipleTimes(randomNum, 10));
// (doMultipleTimes(classGreeting, 10));
// (doMultipleTimes(powerFactory(), 10));

