console.log('');
console.log('9. Напиши класс на typescript.');
console.log('-----------------------------------------------------------');
    
class Car {
    constructor(public brand: string, public speed: number, public color: string){}
    public getSpeed(): number {
        return this.speed;
    }
}
const ford = new Car('Ford', 120, 'red');
console.log(ford);
console.log(`Speed ${ford.brand}: ${ford.getSpeed()} km/h`);
(() => {
    
})()