// EXAMPLE 1 - Get the last N elements of an Array

const arr = ['a', 'b', 'c', 'd', 'e'];

const last3 = arr.slice(-3); // 👉️ ['c', 'd', 'e']
console.log(last3);

const last2 = arr.slice(-2); // 👉️ ['d', 'e']
console.log(last2);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the last N elements, excluding the first

// const arr = ['a', 'b', 'c'];

// // 👇️ get last 3 elements, excluding the first
// console.log(arr.slice(Math.max(arr.length - 3, 1))); // [ 'b', 'c' ]

// // 👇️ get last 2 elements, excluding the first
// console.log(arr.slice(Math.max(arr.length - 2, 1))); // [ 'b', 'c' ]

// // 👇️ get last element, excluding the first
// console.log(arr.slice(Math.max(arr.length - 1, 1))); // [ 'c' ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the last N elements of an array using lodash

// import _ from 'lodash';

// const arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(_.takeRight(arr, 4)); // [ 'b', 'c', 'd', 'e' ]
// console.log(_.takeRight(arr, 3)); // [ 'c', 'd', 'e' ]
// console.log(_.takeRight(arr, 2)); // [ 'd', 'e' ]
