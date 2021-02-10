const Emitter = require('events');
const emitter = new Emitter();

/**
 * Able to swap out GreetMe components
 */
const GreetMe = require('./greeterFunc');
//const GreetMe = require('./greetings/greeterClass');
const eventTypes = require('./events');

/**
 * Example with both Class and Function inheritance
 *
 * @type {GreetMe}
 */
const greeter1 = new GreetMe();
greeter1.on(eventTypes.GREET, function(data) {
    console.log('Inside on --', data);
});

greeter1.greet('This is my life');

console.log(greeter1.greeting);

emitter.on(eventTypes.GREET, function() {
    console.log('Is it me you are looking for?');
});

emitter.on(eventTypes.GREET, function() {
    console.log('I have always been here...');
});

emitter.emit(eventTypes.GREET);