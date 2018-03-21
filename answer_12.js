console.log('');
console.log('12. Создай класс со всеми возможными модификаторы.');
console.log('-----------------------------------------------------------');
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
(function () {
})();
