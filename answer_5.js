console.log('');
console.log('5. Напиши функцию принимающую число или строку.');
console.log('   - Если это число прибавь к нему 10 и верни результат.');
console.log('   - Если это строка добавь к ней произвольную строку и верни результат.');
console.log('-----------------------------------------------------------');
(function () {
    function definitionType(v1) {
        return (typeof v1 === 'string') ? v1 + " typescript" : v1 + 10;
    }
    console.log("string: " + definitionType('learn') + "!");
    console.log("number: " + definitionType(10));
})();
