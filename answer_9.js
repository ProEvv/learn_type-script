console.log('');
console.log('9. Напиши класс на typescript.');
console.log('-----------------------------------------------------------');
var Car = /** @class */ (function () {
    function Car(brand, speed, color) {
        this.brand = brand;
        this.speed = speed;
        this.color = color;
    }
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    return Car;
}());
var ford = new Car('Ford', 120, 'red');
console.log(ford);
console.log("Speed " + ford.brand + ": " + ford.getSpeed() + " km/h");
(function () {
})();
