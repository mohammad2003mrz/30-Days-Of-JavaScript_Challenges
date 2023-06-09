"use strict";

//Exercises: Level 1

// Challenge--1
const information = {
  ali: [["reza", "ali"], "reza"],
  firstName: "Mohammad Reza",
  lastName: "Ebrahimi",
  age: 20,
  country: "Afghanistan",
  city: "Herat",
};

console.log(typeof information.firstName);

// Challenge--2

console.log(10 === "10");

// Challenge--3

console.log(parseInt("9.8") === 10);

//Challenge--4

// True Value

console.log(6 > 5);
console.log(6 > 5 && undefined !== 10);
console.log(typeof Nan === typeof number);

// False Value

console.log(10 > 11);
console.log(!(6 > 5) && undefined !== 10);
console.log("Alireza".length === "Mohammadreza".length);

//Challenge--5

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

//Challenge--6

console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);

//Challenge--7

const nowYear = new Date().getFullYear();
const nowMonth = new Date().getMonth() + 1;
const nowDate = new Date().getDate();
const nowDay = new Date().getDay() + 1;
console.log(nowYear, nowMonth, nowDate, nowDay);

//Exercises: Level 2

//Challenge--1

const height = prompt("Enter Number Height");
const base = prompt("Enter Number Base");

const area = 0.5 * height * base;

console.log("Area : " + area);

//Challenge--2

const Num1 = prompt("Enter Number 1");
const Num2 = prompt("Enter Number 2");
const Num3 = prompt("Enter Number 3");

const Sum = Number(Num1) + Number(Num2) + Number(Num3);

console.log("Sum : " + Sum);

//Challenge--3

const length = prompt("Enter Number Length");
const width = prompt("Enter Number Width");

const areaReg = 2 * (Number(length) + Number(width));

console.log("Area Reg : " + areaReg);

//Challenge--4

const radius = prompt("Enter Number Radius");
const PI = 3.14;

const areaCircle = PI * Number(radius) ** 2;

console.log("Area Circle : " + areaCircle);

//Challenge--5

const enterNum1 = prompt("Enter Number X");
const formol = `Y = "  ${Number(enterNum1) * 2 - 2}`;

console.log(formol);

//Challenge--6

const arrNum = [2, 6, 10];

const y1 = arrNum[0];
const y2 = arrNum[2];
const x1 = arrNum[0];
const x2 = arrNum[1];

const formalH = (y2 - y1) * (x2 - x1);
console.log(formalH);

//Challenge--7

function calculateY(x) {
  return x * x + 6 * x + 9;
}

function findXValueForYZero() {
  var x = -100; // Starting with a low x value
  var y = calculateY(x);

  while (y !== 0) {
    x++;
    y = calculateY(x);
    if (x > 100) {
      console.log("No x value found for y = 0 in the given range.");
      return;
    }
  }

  console.log("x value when y = 0:", x);
}

findXValueForYZero();

//Challenge--8

const inputHour = Number(prompt("Please Enter Hours Between 0 To 24"));
const inputRateMon = Number(prompt("How Many Take Money?"));

let rateMon = 0;
for (let i = 1; i <= 6; i++) {
  const calculateRate = inputHour * inputRateMon;

  rateMon += calculateRate;
}

console.log("You work this much per week :" + rateMon + "$");

//Challenge--9

const names = ["Mohammad Reza", "Jami", "Ali"];

if (names[1].length <= 7) {
  console.log(
    `Your first name, ${names[0]} is longer than your family name, ${names[1]}`
  );
} else {
  `Your first name, ${names[0]} is Short than your family name, ${names[1]}`;
}

//Challenge--10

const birthYear = Number(prompt("Please Enter Birth Year : "));

birthYear >= 18
  ? console.log("Allow The User To Drive")
  : console.log("User To Wait A Certain Amount Of Years");

//Challenge--11

const enterYears = Number(prompt("Please Enter Year :"));
const YearConst = (100 - enterYears) * 12 * 30 * 24 * 60 * 3600;
console.log("You Live : " + YearConst + " Second");

//Challenge--12

const dateHuman = new Date();

const humYear = dateHuman.getFullYear();
const humMonth = dateHuman.getMonth() + 1;
const humDay = dateHuman.getDate();
const humHours = dateHuman.getHours();
const humMinute = dateHuman.getMinutes();

console.log(`${humYear}-${humMonth}-${humDay}-${humHours}-${humMinute}`);
