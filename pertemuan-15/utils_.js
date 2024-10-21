// Importing functions from the module
import { calculateAge, yearUntilRetirement, addNumber, calculateArea, makeAjaxRequest } from './exercise8.js';

// Example usage of imported functions
const people = [{ year: 1987, firstName: "John" }];
const [john] = people;
yearUntilRetirement(john);

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

let radius = 21;
console.log(`Area with 21 radius: ${calculateArea({ radius })}`);

radius = 7;
console.log(`Area with 7 radius: ${calculateArea({ radius })}`);

console.log(`Area with default radius: ${calculateArea({})}`);

makeAjaxRequest("www.google.com");
