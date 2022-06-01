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
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    thirstCheck(){
        if (this.thirst >= 100){
            console.log('thirst end');
        }}
    malevolenceCheck(){
        if(this.malevolence >= 100){
            console.log('malevolence end');
        }
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
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    speedCheck(){
        if (this.speed >= 100){
            console.log('speed end');
        }}
    chillCheck(){
        if(this.chill <= 0){
            console.log('chill end');
        }
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
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("hunger end");
        }}
    coalCheck(){
        if (this.coal <= 0){
            console.log('coal end');
        }}
    gavisconCheck(){
        if(this.gaviscon <= 0){
            console.log('gaviscon end');
        }
    }
    }

    


module.exports = { Cat, Sloth, Dragon };