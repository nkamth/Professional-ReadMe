// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./utils/generateMarkdown')

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Projects title ?'
    },
    {
        type:'input',
        name:'description',
        message:'Description of your Project?',
    },
    {
        type:'input',
        name:'installation',
        message:'Instructions for installation?',
    },
    {
        type:'input',
        name:'usage',
        message:'Project Usage information?',
    },
    {
        type:'input',
        name:'contribution',
        message:'Information as to how to contribute?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your gitHub username',
    },
    {
        type: "input",
        name: "tests",
        message: "Information to run tests?",
        default: "npm run test",
    },
    {
        type:'list',
        name:'license',
        message:'License ?',
        choices:['MIT','ISC','GNU GPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    }
];

// Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        // console.log(answers);
        const mark = MarkDown(answers);

        console.log(mark)
        return answers;
    })
    .catch((error)=>{
        console.log(error);
    })
}

// Function call to initialize app
init();
