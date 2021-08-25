//Model
class Traveler {
    constructor(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
        this.food = 1;
        this.isHealthy = true;
    }

    hunt = function() {
        this.food += 2;
    }

    eat = function() {
        if (this.food > 0) {
            this.food--;
        }

        else {
            this.isHealthy = false;
        }
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity;
        this.crew = [];
    }

    getAvailableSeatCount = function() {
        return this.capacity - this.crew.length;
    }

    join = function(crewMember) {
        if (this.capacity > this.crew.length) {
            this.crew.push(crewMember);
        }
    }

    shouldQuarantine = function() {
        this.result = false;
        
        for (let i = 0; i < this.crew.length; i++) {
            if (this.crew[i].isHealthy === false) {
                this.result = true;
            }
        }

        return this.result;
    }

    totalFood = function() {
        this.count = 0; 

        for (let i = 0; i < this.crew.length; i++) {
            this.count += this.crew[i].food;
        }

        return this.count;
    }
}

//Create Travelers/Wagon
let pedro = new Wagon(3);
let felipe = new Traveler("Felipe", 21, "blacksmith");
let marcos = new Traveler("Marcos", 34, "fisherman");
let lucas = new Traveler("Lucas", 16, "dreamer");

pedro.join(felipe);
pedro.join(marcos);
pedro.join(lucas);

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);