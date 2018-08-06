
let Vehicle = require('./Vehicle.js');

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
    super(carModel, carYear, maxSpeed);
    this.type = "truck";
    }
    transportContainer() {
        console.log (`I am starting to transport heavy container`);
    }
    static displayStat_truck() {
        console.log(`Static method calls are made directly on the class and are not callable on instances of the class.`);
    } 
    displayInfo () {
        console.log (`Warning: to drive a truck regular licence is not suitable!`);
        super.displayInfo();
    }
}
module.exports = Truck;
