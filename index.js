// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubInp => {
            if (githubInp) {
                return true;
            } else {
                console.log('Please enter GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your professional email:',
        validate: emailInp => {
            if (emailInp) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInp => {
            if (titleInp) {
                return true;
            } else {
                console.log('Please enter project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your application:',
        validate: descriptionInp => {
            if (descriptionInp) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Give detailed instructions on how to install your application:',
        validate: installInp => {
            if (installInp) {
                return true;
            } else {
                console.log('Please enter instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
        validate: usageInp => {
            if (usageInp) {
                return true;
            } else {
                console.log('Please enter usage information!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicense',
        message: 'Would you like to add a license to your application?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter license:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter all contributors of this application:',
        validate: contribInp => {
            if (contribInp) {
                return true;
            } else {
                console.log('Please enter contributor names!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing information:',
        validate: testInp => {
            if (testInp) {
                return true;
            } else {
                console.log('Please enter a testing information!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(data => {
        return writeToFile('./dist/README.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init()