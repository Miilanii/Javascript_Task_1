
// Exercise 1: Temperature check

function checkTemp(temp) {
    if (temp < 0) {
        console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
        console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}

function checkTempSwitch(temp) {
    switch (true) {
        case (temp < 0):
            console.log("It's freezing!");
            break;
        case (temp >= 0 && temp <= 15):
            console.log("It's cold.");
            break;
        case (temp >= 16 && temp <= 25):
            console.log("It's mild.");
            break;
        default:
            console.log("It's warm.");
    }
}

// Exercise 2: Divisibility Check

function Divisibility(number) {
    if (number % 2 === 0 && number % 3 === 0) {
        console.log("Divisible by both.");
    } else if (number % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (number % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}


function DivisibilitySwitch(number) {
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            console.log("Divisible by both.");
            break;
        case (number % 2 === 0):
            console.log("Divisible by 2.");
            break;
        case (number % 3 === 0):
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }
}

// Exercise 3: For loops

for (let i = 1; i <= 10; i++) {
    console.log("Numbers",i);
}


for (let i = 2; i <= 20; i += 2) {
    console.log("Even Numbers",i);
}


let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i; 
}
console.log("Sum of numbers from 1 to 100 is", sum);


const arrayOfNumbers = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    console.log(arrayOfNumbers[i]);
}

const numbers = [3, 7, 2, 5, 10, 6];
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest number is ", largest);


// Exercise 4: While loops

let num = 1;
while (num <= 10) {
    console.log("Numbers 1-10",i);
    num++;
}

let digit = 2;
while (digit <= 20) {
    console.log("Even numbers",i);
    digit += 2;
}

let sumOf = 0;
let num_2 = 1;
while (i <= 100) {
    sumOf += num_2;
    num_2++;
}
console.log("Sum of numbers from 1 to 100 is:", sumOf);


let num_3 = 5;
while (num_3 < 50) {
    console.log("Multiples of 5",num_3);
    num_3 += 5;
}

// Exercise 5: Do While loops

let aNum = 1;
do {
    console.log(aNum);
    aNum++;
} while (i <= 10);


let sumNumbers = 0;
let aNum_1 = 1;
do {
    sum += aNum_1;
    aNum_1++;
} while (i <= 100);
console.log("Sum of numbers from 1 to 100 is:", sum);


let aNum_2;
do {
    aNum_2 = parseInt(prompt("Please enter a number greater than 10:"));
} while (aNum_2 <= 10);
console.log("The number you entered is ", aNum_2);


let aNum_3;
do {
    aNum_3 = parseInt(prompt("Please enter a number greater than 10:"));
} while (aNum_3 <= 10);
console.log("You entered:", aNum_3);


const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess < correctNumber) {
        console.log("Too low. Try again.");

    } else if (guess > correctNumber) {
        console.log("Too high. Try again.");
        
    } else {
        console.log("Yayy you guessed the correct number.");
    }
} while (guess !== correctNumber);
