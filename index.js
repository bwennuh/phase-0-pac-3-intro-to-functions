// Follow along with the examples here

function doNothing() {}

function sayHello() {
    console.log('Hello!');
}

function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
}

function sayHelloToSofia() {
    console.log("Hello, Sofia!");
}

function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
}

function sayHelloToBrenna() {
    console.log("Hello, Brenna!");
}

sayHello();
sayHelloToIsabel();
sayHelloToSofia();
sayHelloToBrendan();
sayHelloToBrenna();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}
  
sayHelloTo('Isabel'); // "Hello, Isabel!"
sayHelloTo("Jane"); // "Hello, Jane!"
sayHelloTo("R2-D2"); // "Hello, R2-D2!"
sayHelloTo(1); // "Hello, 1!"
  
// ^ Note that in the above, JavaScript coerces the number 1 to the string "1"

/*function say(greeting, firstName) {
    console.log(`${greeting}, ${firstName}!`);
}
*/

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
}
say("Hello", "Julio");

function sayAgain(greeting, firstName) {
    console.log('I was called!');
    return `${greeting}, ${firstName}!`;
}
sayAgain("Howdy, partner");

function doSomething(thing) {
    console.log(thing);
}
  
doSomething('anything'); // passing the argument 'anything' into our function 

function add(x, y) {
    return x + y;
}
console.log(add(1,2));
