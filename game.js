const inquirer = require("inquirer");
const { Cat } = require("./app");
const { Sloth } = require("./app");
const { Dragon } = require("./app");
let myPet = {};

const catFn = async () => {
    const catAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your new cat?",
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
    await catFn();
}
else if(catAction.action == 'giveWater'){
    await myPet.giveWater();
    await catFn();
}
else if(catAction.action == 'ignore'){
    await myPet.ignore();
    await catFn();
}}

const slothFn = async () => {
    const slothAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your sloth companion?",
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
    await slothFn();
}
else if(slothAction.action == 'hangOut'){
    await myPet.hangOut();
    await slothFn();
}
else if(slothAction.action == 'attachRocket'){
    await myPet.attachRocket();
    await slothFn();
}}

const dragonFn = async () => {
    const dragonAction = await inquirer.prompt({
    type: "list",
    name: "action",
    message: "What would you like to do with your Dragon?",
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
    await dragonFn();
}
else if(dragonAction.action == 'feedCoal'){
    await myPet.feedCoal();
    await dragonFn();
}
else if(dragonAction.action == 'feedGaviscon'){
    await myPet.feedGaviscon();
    await dragonFn();
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
                myPet = new Cat(petName, petAge, 10, 10, 100);
                await catFn();
                break;
            case 'sloth': 
                myPet = new Sloth(petName, petAge, 0, 1, 100);
                await slothFn();
                break;
            case 'dragon':
                myPet = new Dragon(petName, petAge, 0, 100, 0);
                await dragonFn();
                break;
            default:
                break;


       

            }console.log(myPet);    }
    start();
}
    catch(error) {
        console.log("whoops error");
    } 
