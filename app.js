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
        this.malevolence -= 10; // changed to += from - (Dom)
    }

    ignore() {
        this.thirst += 10;
        this.hunger += 10;
        this.malevolence += 20;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("\n____________________________\n|                          |\n|           /\\_/\\          |\n|          ( X.X )         |\n|           > ^ <          |\n----------------------------\nYour pet has perished from HUNGER!\n----------------------------");
        }}
    thirstCheck(){
        if (this.thirst >= 100){
            console.log("\n____________________________\n|                          |\n|           /\\_/\\          |\n|          ( X.X )         |\n|           > ^ <          |\n----------------------------\nYour pet has perished from HUNGER!\n----------------------------");
        }}
    malevolenceCheck(){
        if(this.malevolence >= 100){
            console.log("\n____________________________\n|                          |\n|           /\\_/\\          |\n|          ( \\./ )         |\n|           > ^ <          |\n----------------------------\nYour pet has ran away and is plotting to kill you!\nYou have brought this upon yourself!\n----------------------------");
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
    }

    hangOut(){
        this.hunger += 10;
        this.speed -= 10;
        this.chill += 10;
    }

    attachRocket(){
        this.hunger += 10;
        this.speed += 15;
        this.chill -= 10;
    }
    hungerCheck(){
        if(this.hunger >= 100){
            console.log("____________________________\n|                          | \n|       ____________       | \n|       ____________       | \n|        | |    | |        | \n|        | |____| |_       | \n|        |________X_X|     | \n----------------------------\nYour pet has perished from HUNGER!\n----------------------------");
        }}
    speedCheck(){
        if (this.speed >= 100){
            console.log('____________________________\n|     __                   | \n|     \ \___________       | \n| ###[==____________>      | \n|     /_/| |    | |        | \n|        | |____| |_       | \n|        |________O_O|     | \n----------------------------\nYour pet has become too addicted to thrills and become a daredevil stunt sloth\n----------------------------');
        }}
    chillCheck(){
        if(this.chill >= 100){
            console.log('____________________________\n|                          | \n|       ____________       | \n|       ____________       | \n|                          | \n|                          | \n|                          | \n----------------------------\nYour pet has become TOO CHILL and elevated to a higher state of consciousness\n----------------------------');
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
        this.coal -= 10;
        this.gaviscon -= 10;
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
            console.log("____________________________\n|         /     \\          | \n|        ((     ))         | \n|         \\\\_v_//          |\n|          )_^_(           | \n|         / X X \\          | \n|        | /_ _\\ |         |\n|          \\_ _/           |\n|          (o_o)           |\n|           VwV            |\n----------------------------\nYou pet has perished from HUNGER!");
        }}
    coalCheck(){
        if (this.coal <= 0){
            console.log("____________________________\n|         /     \\          | \n|        ((     ))         | \n|         \\\\_v_//          | \n|          )_^_(           | \n|       o /     \\ o        | \n|     o  | /_ _\\ |  o      |\n|    O     \\_ _/      O    |\n|          (o_o)           |\n|           VwV            |\n----------------------------\nYour pet can't breathe fire and ran away in tears");
        }}
    gavisconCheck(){
        if(this.gaviscon <= 0){
            console.log("____________________________\n|     _ ._  _ , _ ._       | \n|   (_ ' ( `  )_  .__)     | \n|  ( (  (    )   `)  ) _)  | \n| (__ (_   (_ . _) _) ,__) | \n|     `~~`\\ ' . /`~~`      | \n|          ;   ;           |\n|          /   \\           |\n|_________/_ __ \\__________|\n----------------------------\nYour pet's indigestion becomes too much and explodes");
        }
    }
    }

    


module.exports = { Cat, Sloth, Dragon };