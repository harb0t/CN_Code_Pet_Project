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
        this.malevolence += 10; // changed to += from - (Dom)
    }

    ignore() {
        this.thirst += 10;
        this.hunger += 10;
        this.malevolence += 20;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("Your pet has perished from HUNGER!");
        }}
    thirstCheck(){
        if (this.thirst >= 100){
            console.log('Your pet has perished from THIRST!');
        }}
    malevolenceCheck(){
        if(this.malevolence >= 100){
            console.log('Your pet has ran away and is plotting to kill you! You have brought this upon yourself');
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
            console.log("Your pet has perished from HUNGER!");
        }}
    speedCheck(){
        if (this.speed >= 100){
            console.log('Your pet has become too addicted to thrills and become a daredevil stunt sloth');
        }}
    chillCheck(){
        if(this.chill <= 0){
            console.log('Your pet has become too chilled and elevated to a spiritual plane');
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
        this.hunger +=10;
        this.coal += 10;
        this.gaviscon -= 10;
    }

    feedGaviscon() {
        this.hunger +=10;
        this.coal -= 10;
        this.gaviscon += 10;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("You pet has perished from HUNGER!");
        }}
    coalCheck(){
        if (this.coal <= 0){
            console.log("Your pet can't breathe fire and ran away in tears");
        }}
    gavisconCheck(){
        if(this.gaviscon <= 0){
            console.log("Your pet's indigestion becomes to much and explodes");
        }
    }
    }

    


module.exports = { Cat, Sloth, Dragon };