// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


// Swapping two variables
let a = 5;
let b = 10;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

// Calculating factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let numbers = 5;
console.log(`Factorial of ${numbers} is ${factorial(numbers)}`);


function removeDuplicates(arr) {
    // Create a new Set to store unique values
    const uniqueSet = new Set();
  
    console.log("1st >>>>" , uniqueSet);
    // Iterate through the original array and add unique values to the Set
    for (const item of arr) {
      uniqueSet.add(item);
    }
    console.log("2nd >>>>" , uniqueSet);
    
    // Convert the Set back to an array to get unique values
    const uniqueArray = Array.from(uniqueSet);
    
    console.log("3nd >>>>" , uniqueArray);
    return uniqueArray;
  }
  
  // Your original array
  var arr = [1,1,2, 2, 3, 3, 4, 6, 21, 5, 1, 5, 2];
  
  // Call the function to get an array with unique values
  var uniqueArray = removeDuplicates(arr);
  
  // Display the unique array
  console.log(uniqueArray);

  

  let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
  console.log(text);
  console.log(result);