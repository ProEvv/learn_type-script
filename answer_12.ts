console.log('');
console.log('12. Создай класс со всеми возможными модификаторы.');
console.log('-----------------------------------------------------------');
    
class Animal {
    constructor(
        public paws: boolean = true, 
        public wool: boolean = true, 
        private tail: boolean = true) {
            
    }
}

(() => {
    
})()