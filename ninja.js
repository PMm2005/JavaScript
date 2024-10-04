class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(`Ninja's name is: ${this.name}`);
    }

    showStats() {
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`${this.name} Ninja drink sake gives +10 health, Health is now: ${this.health}`);
    }
}

const ninja1 = new Ninja("Naruto");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();