console.log('');
console.log('4. Напиши функцию которая принимает несколько строк, конкатенирует их и выводит в консоль.');
console.log('-----------------------------------------------------------');

(() => {
    const a: string = 'learn',
          b: string = 'typescript',
          c = (v1: string, v2: string): string => `${v1} ${v2}!`;
          console.log(c(a, b));
})()