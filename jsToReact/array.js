// how to initilize array in js

const myarr = [1, 2, 3, 4, "hunny", true, 12];

// console.log(myarr[1]);

const arr1 = new Array(1, 2, 3, 4);
// console.log(arr1);

// some methods of array

// push :- it add an elements at the end of the array

arr1.push(12);
// console.log(arr1);

// pop :- it remove an elements from last in the array

arr1.pop();
// console.log(arr1);

// unShift :- it add an elements at the start of the array

arr1.unshift(5);
// console.log(arr1);

// shift :- it remove the elements from start

arr1.shift();
// console.log(arr1);

// if you want to check an elements in the Array is available or not then we use include methods

// console.log(arr1);
// console.log(arr1.includes(7));
// console.log(arr1.includes(2));

// if you want to know the index of any array then you can use index methods
// console.log(arr1.indexOf(3));

// slice :- it take array elements from the range you have given it includes the first parameter and excludes the second parameter

// console.log(arr1.slice(1, 3));

// splice :- it maniplute the array it remove the elements from array with the given range

// console.log(arr1);
// console.log(arr1.splice(0, 2));
// console.log(arr1);

// concat and spread operators
// concat
const marvelHeros = ["ironman", "hulk", "thor"];
const dcHeros = ["superman", "flash", "batman"];

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

// spread operator

const allHeros = [...marvelHeros, ...dcHeros];
// console.log(allHeros);

// how to solve the nested array easly

const nestedArray = [1, 2, 3, ["hunny", true, "sinha"], [2, 4, (5)[(2, 5)]]];
// console.log(nestedArray.flat(Infinity));

// to convet any data type into array

// console.log(Array.from("Hunny"));

let score = 100;
let score1 = 200;
let score2 = 300;

console.log(Array.of(score, score1, score2));
