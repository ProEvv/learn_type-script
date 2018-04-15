console.log('');
console.log('15. Что такое implements?');
console.log('-----------------------------------------------------------');
(function () {
    console.log('implements заставляет класс реализовать все методы описаные в интерфейсе. ');
    var User = /** @class */ (function () {
        function User(userId, userName, userAge) {
            this.userId = userId;
            this.userName = userName;
            this.userAge = userAge;
        }
        User.prototype.getFullName = function (surname) {
            return this.userName + " " + surname;
        };
        return User;
    }());
    var john = new User(1, "John", 26);
    console.log(john);
    console.log(john.getFullName("Smith"));
})();
