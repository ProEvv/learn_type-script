console.log('');
console.log('7. Напиши функцию принимающую неограниченное кол-во чисел, и возвращающую их сумму.');
console.log('-----------------------------------------------------------');
(function () {
    function totalSum() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var sum = rest.reduce(function (prev, next) { return prev += next; });
        console.log(sum);
    }
    totalSum(1, 2, 3, 4, 5);
    totalSum(1, 2, 3);
    totalSum(1);
})();
