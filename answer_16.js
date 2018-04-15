console.log('');
console.log('16. Напиши два интерфейса, унаследуй один от другого, и реализуй класс с помощью этого интерфейса.');
console.log('-----------------------------------------------------------');
(function () {
    var User = /** @class */ (function () {
        function User(userId, userName, userAge) {
            this.userId = userId;
            this.userName = userName;
            this.userAge = userAge;
        }
        return User;
    }());
    var john = new User(1, "John", 26);
    console.log(john);
})();
