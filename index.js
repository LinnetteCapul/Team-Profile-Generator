const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")

const {generateManagerCard, generateEngineerCard, generateInternCard, baseHtml} = require("./src/htmlGen")


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
                name: 'id',
                message: 'What is the Manager id?',
                },
                {
                 type: 'input',
                 name: 'email',
                 message: 'What is the Manager email?',
                },
                {
                 type: 'input',
                 name: 'officeNumber',
                 message: 'What is the office number?',
            }
        ])
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(name, id, email, officeNumber);
            teamMemberHtmlArr.push(generateManagerCard(manager));
            mainMenu();
        });
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
                        return generateHtml();
                }

            })
    }
    function engineerCreate() {
        inquirer.prompt([
            {
                 type: 'input',
                 name: 'name',
                 message: 'What is the Engineer name?',
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the Engineer id?',
                },
                {
                 type: 'input',
                 name: 'email',
                 message: 'What is the Engineer email?',
                },
                {
                 type: 'input',
                 name: 'github',
                 message: 'What is the Github username?',
            }
        ])
        .then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            teamMemberHtmlArr.push(generateEngineerCard(engineer));
            mainMenu();
        });
    }
    function internCreate() {
        inquirer.prompt([
            {
                 type: 'input',
                 name: 'name',
                 message: 'What is the Intern name?',
                },
                {
                type: 'input',
                name: 'id',
                message: 'What is the Intern id?',
                },
                {
                 type: 'input',
                 name: 'email',
                 message: 'What is your email?',
                },
                {
                 type: 'input',
                 name: 'school',
                 message: 'What school does the intern go to?',
            }
        ])
        .then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            teamMemberHtmlArr.push(generateInternCard(intern));
            mainMenu();
        });
    }
    function generateHtml() {
        fs.writeFile("./dist/index.html", baseHtml(teamMemberHtmlArr), (err) => {
            err ? console.log(err) : console.log("Generated HTML file!")
        })
    }

    managerCreate();
}
init();