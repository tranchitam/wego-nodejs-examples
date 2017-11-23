// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Register click event
eventEmitter.on('click', (event, data) => {
    console.log(event);
});

// Fire click event
eventEmitter.emit('click', { message: 'lol' });
