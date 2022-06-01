const inquirer = require("inquirer");
const { Cat } = require("./app");
const { Sloth } = require("./app");
const { Dragon } = require("./app");
let myPet = {};

const catFn = async () => {
    const catAction = await inquirer.prompt({
    type: "list",
    name: "typeOfPet",
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
if(catAction.typeOfPet == 'feed'){
    await myPet.feed()
}
else if(catAction.typeOfPet == 'giveWater'){
    await myPet.giveWater();
}
else if(catAction.typeOfPet == 'ignore'){
    await myPet.ignore();
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
                await console.log(myPet);
                break;
            case 'sloth': 
                myPet = new Sloth(petName, petAge, 0, 1, 100);
                break;
            case 'dragon':
                myPet = new Dragon(petName, petAge, 0, 100, 0);
                break;
            default:
                break;


       

            }console.log(myPet);    }
    start();
}
    catch(error) {
        console.log("whoops error");
    } 
