const carMakers = ['ford', 'toyota'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = []

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatibles values
carMakers.push(100);

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
});

//Flexible types
const importantDates = [new Date(), '2030-10-10'];