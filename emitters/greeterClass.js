const Emitter = require('events');
const eventTypes = require('./events');

class GreetMe extends Emitter {
    constructor() {
        super();
        this.greeting = 'Whale Hello There!';
    }
    greet(data) {
        console.log(data);
        this.emit(eventTypes.GREET, data);
    }
}

module.exports = GreetMe;