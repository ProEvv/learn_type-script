console.log('');
console.log('6. Напиши функцию принимающую 0 или 2 числа и возвращающую результат суммы, установи 0 как дефолтные параметры.');
console.log('-----------------------------------------------------------');
(function () {
    function sum(a, b) {
        if (a === void 0) { a = 0; }
        if (b === void 0) { b = 0; }
        return a + b;
    }
    console.log("sum: 5 + 5 = " + sum(5, 5));
    console.log("sum: 5 + null = " + sum(5, null));
    console.log("sum: null + 5 = " + sum(null, 5));
    console.log("sum: null + null = " + sum(null, null));
})();
