console.log('');
console.log('8. Напиши функцию принимающую 2 числа и выводи их сумму, в качестве третьего параметра функция принимает callback, callback принимает 2 строки и выводит их в консоль.');
console.log('-----------------------------------------------------------');
    const num_1 = 5;
    const num_2 = 7;
    const str_1 = 'Hello';
    const str_2 = 'World!';

    const concatString = (a: string, b: string): string => `${a} ${b}`;
    const something = (a: number, b: number, callback: Function): void => {
        console.log(`Summ: ${a + b}`);
        console.log(`String: ${callback(str_1, str_2)}`);
    };

    something(num_1, num_2, concatString);
(() => {
    
})()