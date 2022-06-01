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
    feed() {
        this.malevolence -= 10;
        this.hunger -= 10;
        this.thirst += 10;
    }

    giveWater() {
        this.thirst -= 10;
        this.hunger += 10;
        this.malevolence -10;
    }

    ignore() {
        this.thirst += 10;
        this.hunger += 10;
        this.malevolence += 10;
    }
}

class Sloth extends Animal {
    constructor(name, age, hunger, speed, chill) {
        super(name, age, hunger);
        this.speed = speed;
        this.chill = chill;
    }

    feed(){
        this.hunger -= 10;
        this.speed -= 10;
        this.chill += 10;
    }

    hangOut(){
        this.hunger += 10;
        this.speed -= 10;
        this.chill += 10;
    }

    attachRocket(){
        this.speed += 10;
        this.chill -= 10;
    }
}

class Dragon extends Animal {
    constructor(name, age, hunger, coal, gaviscon) {
        super(name, age, hunger);
        this.coal = coal;
        this.gaviscon = gaviscon;
    }

    feedKnight() {
        this.hunger -=10;
        this.coal += 10;
        this.gaviscon += 10;
    }

    feedCoal() {
        this.coal += 10;
        this.gaviscon -= 10;
    }

    feedGaviscon() {
        this.coal -= 10;
        this.gaviscon += 10;
    }
}

module.exports = { Cat, Sloth, Dragon };