// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is your chosen Project Title?',
    name: 'Title'
},
{
    type: 'input',
    message: 'Description of the project',
    name: 'Description'
},
{
    type: 'input',
    message: 'Installation instructions:',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Provide your usage information here:',
    name: 'Usage'
},
{
    type: 'input',
    message: 'contributor(s)?',
    name: 'Contributing'
},
{
    type:'input',
    message:'Provide your test instructions:',
    name:'Tests'
},
{
    type: "list",
    message: "Select license",
    name: "License",
    choices: [
        "MIT",
        "BOOST",
        "APACHE 2.0",
        "BSD 2",
        "None"
    ]
},
{
    type: "input",
    message: "Contact info?",
    name: "Questions"
},
{
    type: "input",
    message: "Github username",
    name: "Url"
},
{
    type: "input",
    message: "Your E-mail?",
    name: "Email"
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( fileName, data, (err) => {
        if(err) {
            
            return console.log(err);

        } else {
            console.log('VICTORY!!!! data written to file!! ')
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => writeToFile('./utils/README.md', generateMarkdown(data) ))
    
}

// Function call to initialize app
init();
