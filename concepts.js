
/* Arrow functions
They act like shortcuts, so you dont need to write bloated code, however it gets in a "set" definiate position wich makes it easier to track.

function myFunction(a, b) {
    return a + b;
}

Would instead become
    const myFunction = (a, b) => a + b; 

*/

const add = (a, b) => {
    return a + b;
  };

  const result = add(1,2);
  console.log(result);

/* Destructuring
Allowing for access to nested values within arrays and objects, can be used to access an array for example and assign it to a variable.
The syntax for this is using {} brackets.
*/

// Destructuring to recieve a value and assigning it to a variable.

const complexObject = {
    nested: {
      array: [4,8,9]  
    }
};

const { nested: { array } } = complexObject;
console.log(array);

// Accepting object as parameter and destructuring to extract properties to a new value.

const extractProperties = (object) => {
    const { property1, property2 } = object;
    console.log(property1);
    console.log(property2);
};

const myObject = {
    property1: "Value 1",
    property2: "Value 2",
    property3: "Value 3"
    // etc etc //
};

extractProperties(myObject);

// Rest/Spread usages and how it can be useful representing indefinite arguments or expanding objects and arrays. //
// Rest //

function sum(...numbers) {
    return numbers.reduce((total, num ) => total + num, 0);
}
console.log(sum(1,2,3,4,5)); // 15 
// Saving a lot of code by using Rest as logic, collects all arguments in to an array and reduce is used as an example to use the collected arguments.

/* Spread, allows to expand objects or arrays in to invidual elements,
   or can be used to copy arrays, spread array elements as arguments to a function. */

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1,2,3,4,5,6]

/* Reduce/Map/Filter and when and how to use them.

Reduce can be used to iterate over and array and for example extract a single value from an array to apply a function
as for lets say, add all numbers in an array and combine them to one value.
*/

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum); // 15 //

// Map creates a new array by applying tranformation to an already existing array, as for example only squared numbers //

const squaredNumbers = numbers.map((number) => number * number );
console.log(squaredNumbers); // 1, 4, 9, 16, 25 //

// Filter also creates a new array as map do, but you can make them pass a test first, as for example we only want even numbers. //

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // 2, 4 //

/* Promises can be used when we want certain conditions to be met before executing them, to create a more failsafe enviroment
    as for example doing asynchronous operations, as far as a understand this is the "new" way of doing callbacks. This should resolve
    in a better and faster experience for the user. */

 function simulateAsyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber >= 0.5) {
                resolve(randomNumber);
            } else {
              reject(new Error('Operation Failed.'));  
            }
        }, 2000);
        });
    }
    simulateAsyncOperation()
    .then((result) => {
      console.log('Operation succeeded:', result);
    })
    .catch((error) => {
      console.log('Operation failed:', error.message);
    });
/* Here i have been making up a promise if the random number is 0.5 or greater the promise resolves with the random number as the answer,
   otherwise it will just send an error. Then() is used to handle the successful outcome and catch() is used to logging errors. I barely
   know what im doing here so i hope this is understandable and decently accurate.
*/       

/* Prototype chains allows to inherit properties and methods from other objects in the code, lets say you can pack a backpack with code and 
   hand it over to other objects somewhere else where its needed to avoid repeatable code. We pack the backpack and pass it along as internal
   links within the code needs it.
*/

const parent = {
    name: 'Elvis',
    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

const child = Object.create(parent); // Collects the backpack
child.name = 'Sara'; // Override the name property

console.log(child.name); // Sara
child.sayHello(); // Hello, my name is Sara.
// It inherited the sayHello from the parent but used its own name property. //

// Closures //
/* Allows functions to keep access to variables even after executing allowing to remember the enviroment.
   Functions can for example, have private variables. It feels similar to prototype chains, maybe we can talk a bit about this.
   Here is an example. 
*/

function createGreeting(name) {
    const message = 'Hello, ${name}!';

    function greet() {
        console.log(message);
    }

    return greet;
}

const greetElvis = createGreeting('Elvis');
const greetAlvaro = createGreeting('Alvaro');

greetElvis(); // Hello, Elvis! //
greetAlvaro(); // Hello, Alvaro! //

// Calling the greet function wich still has access to the message form createGreeting. //

// Encapsulation //
/* Another variation of trying to keep data safe as i understands it.
   Bundling data and methods together within a class and controlling the access.
*/

class Person {
    #name;  // private fields, only accessable within class
    #age;   // private fields, only accessable within class

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    getName() {
        return this.#name;
      }    

    setName(newName) {
        this.#name = newName;
    }
}

const person = new Person('David', 32);

console.log(person.getAge()); // 32
person.setName('Victoria');
console.log(person.getAge()); // 32 (unchanged, age is private)
// Understanding whats happening, but at the same time i do not understand when its usable, and in the same time i do. //

// Functional programming //
/* Emphasizing writing code as pure functions to avoid.. side effects as mutable data  and focus on using
   set inputs and stay within their scope. Helps to keep robust code and maintainable data for long time.
*/

function convertToUpperCase(strings) {
    return strings.map((str) => str.toUpperCase());
}

const strings = ['functional', 'programming', 'doing', 'stuff'];
const results = convertToUpperCase(strings);
console.log(result); // ['FUNCTIONAL', 'PROGRAMMING', 'DOING', 'STUFF'] //




