{
    // OOP - Class

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        // parameter properties

        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);

        }
    }

    const dog = new Animal("German shepard", "dog", "gew gew");
    const cat = new Animal("Mini", "cat", "mew mew");

    cat.makeSound()

}