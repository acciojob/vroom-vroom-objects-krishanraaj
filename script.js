body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f5f5f5;
  margin: 50px;
}

h1 {
  color: #333;
}

.output {
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
}

p {// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function
function SportsCar(make, model, topSpeed) {
  // Call Car constructor for inherited properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit from Car prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Example usage
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Display output on page
document.getElementById("makeModel").textContent = `Make & Model: ${car.getMakeModel()}`;
document.getElementById("topSpeed").textContent = `Top Speed: ${car.getTopSpeed()} mph`;

// Also log in console
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200

  font-size: 1.2rem;
  color: #555;
}
