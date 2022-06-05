const inquirer = require("inquirer");
const { Cat } = require("./app");
const { Sloth } = require("./app");
const { Dragon } = require("./app");
let myPet = {};

const catFn = async () => 

{console.log(`\n____________________________\n|                          |\n|           /\\_/\\          |\n|          ( o.o )         |\n|           > ^ <          |\n----------------------------\nName: ${myPet.name.name} ||| Age:${myPet.age.age}\nHunger: ${myPet.hunger} ||| Thirst: ${myPet.thirst} \nMalevolence: ${myPet.malevolence}\n----------------------------`);
    const catAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: `What would you like to do with ${myPet.name.name}?`,
    choices: [
        {
            key: "a",
            name: "Feed",
            value: "feed",
        },
        {
            key: "b",
            name: "Give Water",
            value: "giveWater",
        },
        {
            key: "c",
            name: "Ignore",
            value: "ignore",
        },
    ],
});
if(catAction.action == 'feed'){
    await myPet.feed()
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){
        await catFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}
else if(catAction.action == 'giveWater'){
    await myPet.giveWater();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){
        await catFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}
else if(catAction.action == 'ignore'){
    await myPet.ignore();
    if(myPet.hunger <100 && myPet.thirst < 100 && myPet.malevolence < 100){
        await catFn();
    }
    else{
        myPet.hungerCheck();
        myPet.thirstCheck();
        myPet.malevolenceCheck();
    }
}}



const slothFn = async () => 


{

    console.log(`____________________________\n|                          | \n|       ____________       | \n|       ____________       | \n|        | |    | |        | \n|        | |____| |_       | \n|        |________o_o|     |\n----------------------------\nName: ${myPet.name.name} ||| Age:${myPet.age.age}\nHunger: ${myPet.hunger} ||| Chill: ${myPet.chill} \nSpeed: ${myPet.speed}\n----------------------------`);

    const slothAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: `What would you like to do with ${myPet.name.name}?`,
    choices: [
        {
            key: "a",
            name: "Feed",
            value: "feed",
        },
        {
            key: "b",
            name: "Hang Out",
            value: "hangOut",
        },
        {
            key: "c",
            name: "Attach Rocket",
            value: "attachRocket",
        },
    ],
});
if(slothAction.action == 'feed'){
    await myPet.feed();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill < 100){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}
else if(slothAction.action == 'hangOut'){
    await myPet.hangOut();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill < 100){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}
else if(slothAction.action == 'attachRocket'){
    await myPet.attachRocket();
    if(myPet.hunger <100 && myPet.speed < 100 && myPet.chill < 100){
        await slothFn();
    }
    else{
        myPet.hungerCheck();
        myPet.speedCheck();
        myPet.chillCheck();
    }
}}

const dragonFn = async () => {
    console.log(`____________________________\n|         /     \\          | \n|        ((     ))         | \n|         \\\\_v_//          | \n|          )_^_(           | \n|         / O O \\          | \n|        | /_ _\\ |         |\n|          \\_ _/           |\n|          (o_o)           |\n|           VwV            |\n----------------------------\nName: ${myPet.name.name} ||| Age:${myPet.age.age}\nHunger: ${myPet.hunger} ||| Coal: ${myPet.coal} Gaviscon: ${myPet.gaviscon}\n----------------------------`);
    const dragonAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: `What would you like to do with ${myPet.name.name}?`,
    choices: [
        {
            key: "a",
            name: "Feed Knight",
            value: "feedKnight",
        },
        {
            key: "b",
            name: "Feed Coal",
            value: "feedCoal",
        },
        {
            key: "c",
            name: "Feed Gaviscon",
            value: "feedGaviscon",
        },
    ],
});
if(dragonAction.action == 'feedKnight'){
    await myPet.feedKnight();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}
else if(dragonAction.action == 'feedCoal'){
    await myPet.feedCoal();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}
else if(dragonAction.action == 'feedGaviscon'){
    await myPet.feedGaviscon();
    if(myPet.hunger <100 && myPet.coal > 0 && myPet.gaviscon > 0){
        await dragonFn();
    }
    else{
        myPet.hungerCheck();
        myPet.coalCheck();
        myPet.gavisconCheck();
    }
}}


try{

    const start = async () => {
        const typeOfPet = await inquirer.prompt({
            type: "list",
            name: "typeOfPet",
            message: "Please select your animal type!",
            choices: [
                {
                    key: "a",
                    name: "Cat",
                    value: "cat",
                },
                {
                    key: "b",
                    name: "Sloth",
                    value: "sloth",
                },
                {
                    key: "c",
                    name: "Dragon",
                    value: "dragon",
                },
            ],
        });
        const petName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your pet called?',
        });
        const petAge = await inquirer.prompt({
            type: 'input',
            name: 'age',
            message: 'And how old is your pet?',
        });
        switch(typeOfPet.typeOfPet){
            case 'cat':
                myPet = new Cat(petName, petAge, 10, 10, 10);
                await catFn();
                break;
            case 'sloth': 
                myPet = new Sloth(petName, petAge, 0, 1, 30);
                await slothFn();
                break;
            case 'dragon':
                myPet = new Dragon(petName, petAge, 0, 50, 50);
                await dragonFn();
                break;
            default:
                break;


       

            }console.log("=============================\n==========GAME OVER==========\n=============================\n");    }
    start();
}
    catch(error) {
        console.log("whoops error");
    } 
