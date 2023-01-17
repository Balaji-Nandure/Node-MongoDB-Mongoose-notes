/** @format */

const EventEmitter = require("events");

const event = new EventEmitter();

// for listening to a custom event
event.on("sayMyName", () => console.log("balaji"));

// we can listen to single event and give multiple callbacks
event.on("sayMyName", () => console.log("rajesh"));
event.on("sayMyName", () => console.log("nandure"));

// to fire a custom event // here 200, akash is a parameter, i can pass as many parameters as i want
event.emit("sayMyName", 200, "akash");
// thumb rule is first listen and then fire to the event
