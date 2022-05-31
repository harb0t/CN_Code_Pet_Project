class Animal {
    constructor(name, age, hunger) {
        this.name = name;
        this.age = age;
        this.hunger = hunger;
    }
}

class Cat extends Animal {
    constructor(name, age, hunger, thirst, malevolence) {
        super(name, age, hunger);
        this.thirst = thirst;
        this.malevolence = malevolence;
    }
}

class Sloth extends Animal {
    constructor(name, age, hunger, speed, chill) {
        super(name, age, hunger);
        this.speed = speed;
        this.chill = chill;
    }
}

class Dragon extends Animal {
    constructor(name, age, hunger, coal, gaviscon) {
        super(name, age, hunger);
        this.coal = coal;
        this.gaviscon = gaviscon;
    }
}

module.exports = { Cat, Sloth, Dragon };