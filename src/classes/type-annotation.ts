/* eslint-disable */

// Primitive types

let name: string = 'Lua';
let age: number = 7;
let adult: boolean = false;
let symbol: symbol = Symbol('Any Symble');


// Arrays

let arrayOfNumbers: number[];
let arrayOfNumbers2: Array<number>;
let arrayOfStrings: string[];
let arrayOfStrings2: Array<string>;

function multiplyNumbers(...arg: Array<number>): number {
    return arg.reduce((acc, value) => acc * value, 1);
}

function concatStrings(...arg: string[]): string {
    return arg.reduce((acc, string) => acc + string);
}

function toUpperCase(...args: string[]): string[]{
    return args.map(string => string.toUpperCase());
}

console.log(multiplyNumbers(1, 5, 6));
console.log(concatStrings('a', 'n', 'a'));
console.log(toUpperCase('o', 'l', 'a'));

// Object

// ? makes adult optional
//let person: {name: string, age: number, adult?: boolean}


// functions

function sum(x: number, y:number): number{
    return x + y;
}
                                   // return
const sum2: (x: number, y:number) => number = (x, y) => x + y;


// Any

function showMessage(msg: any): any {
    return msg;
}


// Void - return nothing


function withoutReturn(...args: string[]): void {
    console.log(args.join(' '));
}

withoutReturn('Joelma', 'Castanhare');

// Object

const objectA: {
    readonly keyA: string, //readonly: cant edit
    keyB: number
    keyC?: number //optional
    [key: string]: unknown // with this, i can create other keys outside the object
} = {
    keyA: 'Oi',
    keyB: 15
}

objectA.keyD = 'Opa';

//console.log(objectA)

// Tuple // unique to typescript

const personInfo:  [number, string] = [16, 'Fabiana']; // specifies the type of each index
const personInfo2: [number, string, ...string[]] = [13, 'Marcus'];
const personInfo3: readonly [number, string, string?] = [65, 'Caio'];

// Null and undefined

// Never: never returns anything

function createError(): never {
    throw new Error('Error');
}

// Enum

enum Colors {
    RED,
    BLUE,
    BLACK
}

enum Colors {
    GREEN = 'GREEN',
    PURPLE = 'PURPLE'
}


//console.log(Colors)
//console.log(Colors.BLACK);
//console.log(Colors[1]);

function chooseColor(color: Colors): string {
    return Colors[color];
}

//console.log(chooseColor(Colors.GREEN));


// unknown - like an any but more safe. Vem antes do any

let x: unknown;

x = 10;
x = '200';
let y = 90

//console.log(x + y);


// Union Types

// string | number | boolean

function verifyData(data: string |  number): string | number {
    if (typeof data === 'string'){
        return `Prazer, ${data}`;
    }

    return data;
}

console.log(verifyData('Joelma'))


// Literal Types

//let x = 10; // Here the type is number
//const y = 10; // Here the type is 10 because of the "const"


function chooseColor2(color: 'Red' | 'Blue'){
    return color;
}

// console.log(chooseColor2()) Is allowed only Red and Blue

// Type Alias

type Age = number;

let personAge: Age;

type Person = {
    name: string,
    age: Age,
    salary: number,
    favoriteColor?: string;
}

type ColorRGB = 'Red' | 'Blue' | 'Green';
type ColorCMYK = 'Black' | 'Yellow';
type favoriteColor = ColorRGB | ColorCMYK

const person: Person = {
    name: 'Adriana',
    age: 13,
    salary: 15000
};

function setFavoritColor(person: Person, color: favoriteColor): Person {
    return { ...person, favoriteColor: color }
}

console.log(setFavoritColor(person, 'Green'))

// Intersection ypes

type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };

type Person3 = HaveName & HaveLastName & HaveAge;

const person3: Person3 = {
    name: 'Clauido',
    lastName: 'Junior',
    age: 45
}

// Functions as type

type MapStringCallback = (item: string) => string;


function mapStrings(array: string[], callBackFn: MapStringCallback): string[] {
    const newArray: string[] = [ ];

    for (let i = 0; i < array.length; i++){
        newArray.push(callBackFn(array[i]));
    }

    return newArray;
}

const newArray = mapStrings(['a', 'b', 'c'], (item) => item.toUpperCase());
console.log(newArray);


// Strutural Type


type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = {name: string, lastName: string}

const verifyUser: VerifyUserFn = (user, sentValue) => {
    return (user.name === sentValue.name && user.lastName === sentValue.lastName);
}

const userDB = {name: 'Fabio', lastName: 'Paulo'}
const sentUser = {name: 'Fabio', lastName: 'Paulo'}
console.log(verifyUser(userDB, sentUser))

export default { name, age };
