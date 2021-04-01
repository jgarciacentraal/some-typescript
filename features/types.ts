let apples: number = 5;
let speed: string = 'Fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

};
let car: Car = new Car();

// Object Literal
let point: {x: number; y: number} = {
  x: 1,
  y: 2
};

// Functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x":1, "y": 5}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x:1, y:5}

//2) When we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i in words) {
  if(words[i] === 'green'){
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10,-1,12];
let numberAboveZero: boolean | number = false;

for(let i in numbers){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}
