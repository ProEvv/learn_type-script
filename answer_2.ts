console.log('');
console.log('2. Напиши 6 переменных разного типа.');
console.log('-----------------------------------------------------------');
(() => {
    const logic: boolean = true;                                // boolean
    const num: number = 5;                                      // number
    const str: string = 'string';                               // string
    const arrNum: number[] = [1, 2, 3];                         // array Array<number>
    const user: object = {                                      // object
        name: 'Jonh',
        surname: 'Smith'
    }
    const something: any = 5 || 'string' || true;               // any
    enum Switch {                                               // Enum
        low,
        middle,
        high
    }
    const nothing: (null | undefined) = null || undefined;      // null & undefined
})()