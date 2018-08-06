let Vehicle = require('./Vehicle.js');
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }
    transportPeople() {
        console.log(`I am starting to transport passengers`);
    }
    displayInfo() {
        console.log(`Let me introduce car model: ${this.model};
    made in following year: ${this.year};
    maximum speed is ${this.maxSpeed}`);
    }
}
module.exports = Car;