console.log('');
console.log('7. Напиши функцию принимающую неограниченное кол-во чисел, и возвращающую их сумму.');
console.log('-----------------------------------------------------------');

(() => {
    function totalSum(...rest: number[]): void {
        const sum = rest.reduce((prev, next) => prev += next);
        console.log(sum);
    }
    totalSum(1, 2, 3, 4, 5);
    totalSum(1, 2, 3);
    totalSum(1);
})()