const Emitter = require('events');
const eventTypes = require('./events');
const util = require('util');

function GreetMe() {
    Emitter.call(this);
    this.greeting = 'Whale Hello There!';
}
util.inherits(GreetMe, Emitter);

GreetMe.prototype.greet = function(data) {
    console.log(data);
    this.emit(eventTypes.GREET, data);
};

module.exports = GreetMe;