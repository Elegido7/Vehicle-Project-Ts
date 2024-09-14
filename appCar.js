var Car = /** @class */ (function () {
    //constructor that initializes the make, model, and year properties.
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    //start method to log "Car engine started" to the console
    Car.prototype.start = function () {
        console.log('Car engine started');
    };
    return Car;
}());
//Create an instance of the Car class and initialize it
var Gari = new Car('Toyota', 'Discovery', 2023);
//Calling the start method on the instance of the Car class i.e. Gari
Gari.start();
