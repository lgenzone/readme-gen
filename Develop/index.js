// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    }, {
        type: "input",
        message: "Please describe the repository.",
        name: "description"
    }, {
        type: "input",
        message: "Please list the Table of Contents",
        name: "contents"
    }, {
        type: "input",
        message: "Please explain the installation requirements",
        name: "installation"
    } , {
        type: "input",
        message: "Please explain the usage for your application",
        name: "usage"
    }, {
        type: "input",
        message: "Please state any test(s).",
        name: "test"
    } , {
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    } , {
        type: "input", 
        message: "Please provide your logo information.",
        name: "logo"
    } , {
        type: "list",
        message: "Please select the license you would like to use.",
        name: "license", 
        choices: [
            "APACHE 2.0",   
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],  
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
