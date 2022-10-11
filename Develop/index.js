// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your gitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'please give a brief description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which lisence would you like to use',
        choices: ['GNU GPLv3', 'Apache License 2.0', 'MIT license', 'The UniLicense']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators or any third-party resources you used',
    },
    {
        type: 'input',
        name: 'extra',
        message: 'What does the user need to know about using the repo',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Do you have any guidelines for users who would like to contribute?',
    },

]

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {

            // Creating const to call upon function from generateMarkdown.js
            const READMEcontent = generateMarkdown(data);

            // TODO: Create a function to write README file
            fs.writeFile('README.md',READMEcontent, (err) =>
                err ? console.log(err) : console.log('success!')
            );
        });
}

// calling upon init() function upon startup
init()
