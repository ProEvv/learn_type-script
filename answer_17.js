console.log('');
console.log('17. Напиши интерфейс для массива объектов (кол-во объектов мы не можем знать заранее).');
console.log('-----------------------------------------------------------');
(function () {
    var users = [
        {
            userId: 1,
            userName: 'John',
            userSurname: 'Smith',
            userAge: 26,
            maritalStatus: false
        },
        {
            userId: 2,
            userName: 'Bill',
            userSurname: 'Gates',
            userAge: 62,
            maritalStatus: true
        },
        {
            userId: 3,
            userName: 'Mark',
            userSurname: 'Zuckerberg',
            userAge: 33,
            maritalStatus: true
        }
    ];
    console.log(users);
})();
