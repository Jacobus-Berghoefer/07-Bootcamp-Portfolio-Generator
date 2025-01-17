import inquirer from 'inquirer';
import fs from 'fs';
import createHTMLFile from './helper.js';

//array of questions to be used for inquirer prompt
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Where are you located?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'What is a short bio of yourself?',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'What is your GitHub profile URL?',
        name: 'githubProfile',
    },
    {
        type: 'input',
        message: 'What is your GitHub portfolio URL?',
        name: 'githubPortfolio',
    },
];

//write to file
const writeToFile = (filename, answers) => {
    filename = 'index.html';
    fs.writeFile(filename, answers, (err) => {
        err ? console.error(err) : console.log('Portfolio HTML file was created');
    });
};

//initialize app
const init = () => {
    inquirer.prompt(questions).then((answers) => {
        const htmlContent = createHTMLFile(answers);
        writeToFile('index.html', htmlContent);
    });
};

init ();