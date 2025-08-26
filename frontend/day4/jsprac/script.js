// task 1
console.log("TASK 1")

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a: " + a);
console.log("b: " + b);

//task 2
console.log("TASK 2")

let numbers = [4, 9, 2, 7, 5];
console.log(Math.max(...numbers));

//task 3
console.log("TASK 3")

let str = "JavaScript is awesome";
const vowels = "aeiouAEIOU";
let count = 0;

for (const char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log(count);

// task 4
console.log("TASK 4")

function isPrime(num) {
    if (num <= 1) {
        return false;

    } else if (num === 2) {
        return true;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }

    return true;
}

console.log(isPrime(17));
console.log(isPrime(18));

// task 5 
console.log("TASK 5")

const reverseStr = function(str) {
    let arr = str.split("").reverse();
    console.log(arr);
}

reverseStr("hello");

//task 6
console.log("TASK 6")

const sumEven = (nums) => {
    let sum = 0;

    for (let num of nums) {
        if (num % 2 === 0) sum += num;
    }

    return sum;
}

console.log(sumEven([1, 2, 3, 4, 5]));

//task 7
console.log("TASK 7")

let arr = [1, 2, 3, 2, 4, 1, 5];
let newArr = [];

for (let num of arr) {
    if (newArr.indexOf(num) === -1) {
        newArr.push(num);
    }
}

console.log(newArr);

// task 8 
console.log("TASK 8");

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}

//task 9
console.log("TASK 9");

const factorial = (num) => {
    let count = num;

    for (let i = 1; i < count; i++) {
        num *= i;
    }

    return num;
}

console.log(factorial(5));

//task 10
console.log("TASK 10");

let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    color: "blue"
};

for (let key in car) {
    console.log(key + ":", car[key])
}
