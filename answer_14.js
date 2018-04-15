var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('');
console.log('14. Как сделать приведение типов, и для чего оно нужно?');
console.log('-----------------------------------------------------------');
(function () {
    console.log('Приведение типов может потребоваться при расширении класса, или при необходимости передать переменную одного типа в параметр другого типа.');
    var Animal = /** @class */ (function () {
        function Animal(paws, wool, tail) {
            if (paws === void 0) { paws = true; }
            if (wool === void 0) { wool = true; }
            if (tail === void 0) { tail = true; }
            this.paws = paws;
            this.wool = wool;
            this.tail = tail;
        }
        return Animal;
    }());
    var Bird = /** @class */ (function (_super) {
        __extends(Bird, _super);
        function Bird(beak, birdPaws, birdWool, birdTail) {
            if (beak === void 0) { beak = true; }
            if (birdPaws === void 0) { birdPaws = true; }
            if (birdWool === void 0) { birdWool = true; }
            if (birdTail === void 0) { birdTail = true; }
            var _this = _super.call(this, birdPaws, birdWool, birdTail) || this;
            _this.beak = beak;
            _this.birdPaws = birdPaws;
            _this.birdWool = birdWool;
            _this.birdTail = birdTail;
            return _this;
        }
        return Bird;
    }(Animal));
    var stork = new Bird();
    var storkBird = stork; // Приведение типа 1
    var cuckoo = stork; // Приведение типа 1
    console.log("stork has a beak: " + storkBird.beak);
    console.log("cuckoo has a beak: " + cuckoo.beak);
    console.log("stork has a beak: " + stork.beak); // Приведение типа 2
})();
