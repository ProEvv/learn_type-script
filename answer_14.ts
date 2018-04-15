console.log('');
console.log('14. Как сделать приведение типов, и для чего оно нужно?');
console.log('-----------------------------------------------------------');
    

(() => {
    console.log('Приведение типов может потребоваться при расширении класса, или при необходимости передать переменную одного типа в параметр другого типа.');
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

    const stork: Animal = new Bird();
    const storkBird: Bird = <Bird>stork; // Приведение типа 1
    const cuckoo: Bird = stork as Bird; // Приведение типа 1

    console.log(`stork has a beak: ${storkBird.beak}`);
    console.log(`cuckoo has a beak: ${cuckoo.beak}`);
    console.log(`stork has a beak: ${(<Bird>stork).beak}`); // Приведение типа 2
    
})()