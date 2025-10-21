// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call Car constructor to inherit properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Set prototype inheritance
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add SportsCar-specific method
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example: create SportsCar instance
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Display results in HTML
document.getElementById("makeModel").textContent =
  "Make & Model: " + car.getMakeModel();
document.getElementById("topSpeed").textContent =
  "Top Speed: " + car.getTopSpeed() + " mph";

// Console output
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200
