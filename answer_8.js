console.log('');
console.log('8. Напиши функцию принимающую 2 числа и выводи их сумму, в качестве третьего параметра функция принимает callback, callback принимает 2 строки и выводит их в консоль.');
console.log('-----------------------------------------------------------');
var num_1 = 5;
var num_2 = 7;
var str_1 = 'Hello';
var str_2 = 'World!';
var concatString = function (str_1, str_2) { return str_1 + " " + str_2; };
var something = function (a, b, callback) {
    console.log("Summ: " + (a + b));
    console.log("String: " + callback(str_1, str_2));
};
something(num_1, num_2, concatString);
(function () {
})();
