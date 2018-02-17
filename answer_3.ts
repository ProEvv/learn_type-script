console.log('');
console.log('3. Напиши функцию которая принимает 2 числа, и возвращает их сумму.');
console.log('-----------------------------------------------------------');

(() => {
    const a: number = 5,
          b: number = 7,
          c = (v1: number, v2: number): number => v1 + v2;
          console.log(c(a, b));
})()