//Defining the Interface
interface vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void;
  //start method/ function which returns void and
  //logs "Engine started" to the console
}
class Car implements vehicle {
  make: string;
  model: string;
  year: number;
  //constructor that initializes the make, model, and year properties.
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  //start method to log "Car engine started" to the console
  start(): void {
    console.log('Car engine started');
  }
}
//Create an instance of the Car class and initialize it
const Gari = new Car('Toyota', 'Discovery', 2023);
//Calling the start method on the instance of the Car class i.e. Gari
Gari.start();
