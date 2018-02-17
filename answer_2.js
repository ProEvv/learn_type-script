console.log('');
console.log('2. Напиши 6 переменных разного типа.');
console.log('-----------------------------------------------------------');
(function () {
    var logic = true; // boolean
    var num = 5; // number
    var str = 'string'; // string
    var arrNum = [1, 2, 3]; // array Array<number>
    var user = {
        name: 'Jonh',
        surname: 'Smith'
    };
    var something = 5 || 'string' || true; // any
    var Switch;
    (function (Switch) {
        Switch[Switch["low"] = 0] = "low";
        Switch[Switch["middle"] = 1] = "middle";
        Switch[Switch["high"] = 2] = "high";
    })(Switch || (Switch = {}));
    var nothing = null || undefined; // null & undefined
})();
