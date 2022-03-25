const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const teamMemberHtmlArr = [];

function init() {
    function managerCreate() {
        inquirer.prompt([
            {
                 type: 'input',
                 name: 'name',
                 message: 'What is the Manager name?',
                },
                {
                 type: 'input',
                 name: 'email',
                 message: 'What is your email?',
                },
                {
                 type: 'input',
                 name: 'id',
                 message: 'What is the Manager id?',
                },
                {
                 type: 'input',
                 name: 'officeNumber',
                 message: 'What is the office number?',
            }
        ])
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(id, name, email, officeNumber)
            teamMemberHtmlArr.push(generateManagerCard(manager))
            mainMenu()
        })
    }
    function mainMenu() {
        inquirer.prompt([
            {
                 type: 'list',
                 name: 'addedRole',
                 message: 'Would you like to add another employee?',
                 choices: ["Engineer", "Intern", "Team Completed"],
                },
            ])
            .then(answers => {
                switch (answers.addedRole) {
                    case "Engineer":
                        return engineerCreate();
                    case "Intern":
                        return internCreate();
                    default:
                        return generateHtml;
                }

            })
    }
    managerCreate()
}
init()