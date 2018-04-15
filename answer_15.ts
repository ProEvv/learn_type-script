console.log('');
console.log('15. Что такое implements?');
console.log('-----------------------------------------------------------');
    

(() => {
    console.log('implements заставляет класс реализовать все методы описаные в интерфейсе. ');

    interface IUser {
        userId: number;
        userName: string;
        getFullName(surname: string): string;
    }

    class User implements IUser{

        constructor(
            public userId: number, 
            public userName: string, 
            public userAge: number) {
        }

        getFullName(surname: string): string {
            return `${this.userName} ${surname}`;
        }
    }
     
    const john = new User(1, "John", 26);
    console.log(john);
    console.log(john.getFullName("Smith"));
})()