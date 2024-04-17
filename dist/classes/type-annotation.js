"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
// Primitive types
let name = 'Lua';
let age = 7;
let adult = false;
let symbol = Symbol('Any Symble');
// Arrays
let arrayOfNumbers;
let arrayOfNumbers2;
let arrayOfStrings;
let arrayOfStrings2;
function multiplyNumbers(...arg) {
    return arg.reduce((acc, value) => acc * value, 1);
}
function concatStrings(...arg) {
    return arg.reduce((acc, string) => acc + string);
}
function toUpperCase(...args) {
    return args.map(string => string.toUpperCase());
}
console.log(multiplyNumbers(1, 5, 6));
console.log(concatStrings('a', 'n', 'a'));
console.log(toUpperCase('o', 'l', 'a'));
// Object
// ? makes adult optional
//let person: {name: string, age: number, adult?: boolean}
// functions
function sum(x, y) {
    return x + y;
}
// return
const sum2 = (x, y) => x + y;
// Any
function showMessage(msg) {
    return msg;
}
// Void - return nothing
function withoutReturn(...args) {
    console.log(args.join(' '));
}
withoutReturn('Joelma', 'Castanhare');
// Object
const objectA = {
    keyA: 'Oi',
    keyB: 15
};
objectA.keyD = 'Opa';
//console.log(objectA)
// Tuple // unique to typescript
const personInfo = [16, 'Fabiana']; // specifies the type of each index
const personInfo2 = [13, 'Marcus'];
const personInfo3 = [65, 'Caio'];
// Null and undefined
// Never: never returns anything
function createError() {
    throw new Error('Error');
}
// Enum
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["BLUE"] = 1] = "BLUE";
    Colors[Colors["BLACK"] = 2] = "BLACK";
})(Colors || (Colors = {}));
(function (Colors) {
    Colors["GREEN"] = "GREEN";
    Colors["PURPLE"] = "PURPLE";
})(Colors || (Colors = {}));
//console.log(Colors)
//console.log(Colors.BLACK);
//console.log(Colors[1]);
function chooseColor(color) {
    return Colors[color];
}
//console.log(chooseColor(Colors.GREEN));
// unknown - like an any but more safe. Vem antes do any
let x;
x = 10;
x = '200';
let y = 90;
//console.log(x + y);
// Union Types
// string | number | boolean
function verifyData(data) {
    if (typeof data === 'string') {
        return `Prazer, ${data}`;
    }
    return data;
}
console.log(verifyData('Joelma'));
// Literal Types
//let x = 10; // Here the type is number
//const y = 10; // Here the type is 10 because of the "const"
function chooseColor2(color) {
    return color;
}
let personAge;
const person = {
    name: 'Adriana',
    age: 13,
    salary: 15000
};
function setFavoritColor(person, color) {
    return Object.assign(Object.assign({}, person), { favoriteColor: color });
}
console.log(setFavoritColor(person, 'Green'));
const person3 = {
    name: 'Clauido',
    lastName: 'Junior',
    age: 45
};
function mapStrings(array, callBackFn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callBackFn(array[i]));
    }
    return newArray;
}
const newArray = mapStrings(['a', 'b', 'c'], (item) => item.toUpperCase());
console.log(newArray);
const verifyUser = (user, sentValue) => {
    return (user.name === sentValue.name && user.lastName === sentValue.lastName);
};
const userDB = { name: 'Fabio', lastName: 'Paulo' };
const sentUser = { name: 'Fabio', lastName: 'Paulo' };
console.log(verifyUser(userDB, sentUser));
exports.default = { name, age };
