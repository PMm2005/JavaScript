class Unit {
    constructor(name, cost, power, resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    applyEffect(effect) {
        if (effect.stat === 'power') {
            this.power += effect.magnitude;
        } else if (effect.stat === 'resilience') {
            this.resilience += effect.magnitude;
        }
        console.log(`${effect.name} applied to ${this.name}. New stats: Power: ${this.power}, Resilience: ${this.resilience}`);
    }

    attack(target) {
        target.resilience -= this.power;
        console.log(`${this.name} attacks ${target.name}. ${target.name}'s resilience is now ${target.resilience}`);
    }
}

class Effect {
    constructor(name, cost, text, stat, magnitude) {
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
}

/*Red belt*/

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
console.log(`Created ${redBeltNinja.name} with Power: ${redBeltNinja.power}, Resilience: ${redBeltNinja.resilience}`);

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
redBeltNinja.applyEffect(hardAlgorithm);

/*Black belt*/

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
console.log(`Created ${blackBeltNinja.name} with Power: ${blackBeltNinja.power}, Resilience: ${blackBeltNinja.resilience}`);

const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
redBeltNinja.applyEffect(unhandledPromiseRejection);

const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
redBeltNinja.applyEffect(pairProgramming);

redBeltNinja.attack(blackBeltNinja);

