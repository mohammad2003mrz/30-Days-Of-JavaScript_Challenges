"use strict";

//Exercise: Level 1

// Challenge--1 & Challenge--2

const fullName = function () {
  const name = "Ali";
  const lastName = "Ebrahimi";
  const fullName = `${name} ${lastName}`;
  return fullName;
};

console.log(fullName());

//Challenge--3

const addNumbers = (num1, num2) => {
  return num1 + num2;
};

console.log(addNumbers(2, 3));

//Challenge--4

const areaReg = function (length, width) {
  const area = length * width;
  return area;
};
console.log(areaReg(2, 2));
