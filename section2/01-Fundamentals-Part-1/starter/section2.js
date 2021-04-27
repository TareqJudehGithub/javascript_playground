// JS introduction:

console.log("Hello, World!");
let js = "Amazing";


/* 

JS is a high level, OOP language.
!High-level, like we don't have to worry about complex concepts like memory management.
JS is a multi-paradigm language. Meaning, JS is flexible.

*ES6 => Released in 2015

*ES = Ecma Script

Value:  A piece of data (The right part of a statement).
We store values in variables.
Declaring a variable called js, assigning a value "Amazing" to it:
     let js = "Amazing";
     let: Data Type
     js: variable
     "Amazing": value

JavaScript variable standard is camel case (camelCase).
Variable names cannot START with a number.
Variable names can contain numbers, letters, _, - , or $.
Variable conventionally does not start with an upper letter.
Variables should be descriptive and meaningful.
*/


let firstName = "John";
console.log(firstName);

/* Data Types
JS had dynamic typing, where we don't have to manually define the 
data type of a value. Data types are determined dynamically.
 
     Values can be either object or primitive.
     Primitive Data Types:
          - Number.  Used for decimals and integers.
               let age = 23;
          - String. Used for text. 
               let name = "John Smith";
          - Boolean. Logical type that can only be true of false.
               isLogged = true;
          - Undefined. Declaring a variable without a value.
               let age;
          - Null. Empty Value.
          - Symbol. Value that is unique and cannot be changed.
          - BigIng (ES2020). Large integers than the Number data type
                             can hold.
               
*/

let someVariable = true;
console.log(someVariable);
console.log(typeof(someVariable));
console.log(typeof('John'));
console.log(typeof(25));
console.log("This variable type is: " + typeof(false));

someVariable = "I'm a new variable";
console.log(someVariable);
console.log(typeof(someVariable));

let date;
console.log(`This data type is: ${typeof(date)}`);

date = 2021;
console.log(`This data type is: ${typeof(date)}`);
