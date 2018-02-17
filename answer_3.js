console.log('');
console.log('3. Напиши функцию которая принимает 2 числа, и возвращает их сумму.');
console.log('-----------------------------------------------------------');
(function () {
    var a = 5, b = 7, c = function (v1, v2) { return v1 + v2; };
    console.log(c(a, b));
})();
