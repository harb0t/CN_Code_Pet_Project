const inquirer = require("inquirer");
const { Cat } = require("./app");
const { Sloth } = require("./app");

let myPet = "";

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
                }
            ]
        })
        const petName = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: 'What is your pet called?',
        });
        const age = await inquirer.prompt({
            type: 'input',
            name: 'age',
            message: 'And how old is your pet?',
        });
        if (typeOfPet == 'cat') {
            myPet = new Cat(petName,age);
        }
        else if (typeOfPet == 'sloth') {
            myPet = new Sloth(petName,age);
        }
        else if (typeOfPet == `dragon`) {
            myPet = new Dragon(petName,age);
        }

        console.log(myPet.name);
    }
    start();}
    catch(error) {
        console.log("whoops error");
    }
