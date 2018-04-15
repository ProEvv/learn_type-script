console.log('');
console.log('13. Создай 2 класса, и унаследуй один класс от другого.');
console.log('-----------------------------------------------------------');
    

(() => {

    class Animal {
        constructor(
            public paws: boolean = true, 
            public wool: boolean = true, 
            private tail: boolean = true) {
                
        }
    }
    class Bird extends Animal {
        constructor (
            public beak: boolean = true,
            public birdPaws: boolean = true, 
            public birdWool: boolean = true, 
            private birdTail: boolean = true
        ) {
            super(birdPaws, birdWool, birdTail);
        }
    }
    console.log(Animal);
    console.log(Bird);
    
})()