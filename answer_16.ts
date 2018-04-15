console.log('');
console.log('16. Напиши два интерфейса, унаследуй один от другого, и реализуй класс с помощью этого интерфейса.');
console.log('-----------------------------------------------------------');


(() => {

    interface IUser {
        userId: number;
        userName: string;
    }
    interface IUser2 extends IUser {
        userAge: number,
    }

    class User implements IUser2 {

        constructor(
            public userId: number,
            public userName: string,
            public userAge: number) {}
    }
    const john = new User(1, "John", 26);

    console.log(john);
})()