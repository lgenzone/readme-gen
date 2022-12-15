// TODO: Include packages needed for this application
// import file system module
const fs = require('fs');
// import inquirer
const inquirer = require('inquirer');
// import generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter the title of your project?",
        name: "title"
    }, {
        type: "input",
        message: "Provide a short description explaining the what, why and how of your project.",
        name: "description"
    }, {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation"
    } , {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage"
    }, {
        type: "input",
        message: "If you wrote any tests for your application, provide examples on how to run them here.",
        name: "tests"
    } , {
        type: "input",
        message: "Enter contribution guidelines.",
        name: "contributors"
    } , {
        type: "input",
        message: "Enter your email.",
        name: "email"
    }, { 
        type: "input",
        message: "Enter your Github username.",
        name: "github"
    }, {
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
function writeToFile(fileName, data) {
    const successMsg = `Your README for ${questions.title} has been successfully created.`;

    fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log(successMsg));

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile('test-README.md', data);
    })
    
}

// Function call to initialize app
init();
