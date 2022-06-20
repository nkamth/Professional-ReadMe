// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const MarkDown = require('./utils/generateMarkdown')

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your Projects Title ?',
        validate: userInput =>{
            if(userInput){
                return true;
            }else {
                console.log("Please enter your Project Title :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'description',
        message:'What is the Description of your Project?',
        validate: descriptionInput =>{
            if(descriptionInput){
                return true;
            }else {
                console.log("Please Enter the Description of your Project :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'installation',
        message:'how do you install your Project?',
        validate: installationInput =>{
            if(installationInput){
                return true;
            }else {
                console.log("Please Enter the Instructions for installation :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'usage',
        message:'How do you Use this Project',
        validate: usageInput =>{
            if(usageInput){
                return true;
            }else {
                console.log("Please Enter the Project usage information :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'contribution',
        message:'How should people contribute to this project?',
        validate: contributionInput =>{
            if(contributionInput){
                return true;
            }else {
                console.log("Please Enter the Information as to how to contribute :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'email',
        message:'Enter your Email Address :',
        validate: emailInput =>{
            if(emailInput){
                return true;
            }else {
                console.log("Please Enter your email address :");
                return false;
            }
        },
    },
    {
        type:'input',
        name:'github',
        message:'Enter your GitHub Username :',
        validate: githubInput =>{
            if(githubInput){
                return true;
            }else {
                console.log("Please Enter your github username :");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "tests",
        message: "How do you test this project?",
        default: "npm run test",
    },
    {
        type:'list',
        name:'license',
        message:'Choose a License for your Project: ',
        choices:['MIT','ISC','GNUGPLv3','Apache'],
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
        fs.writeFile('./output/README.md',mark,function(err){
            if(err){
                console.log('Could not save file',err);
            }else {
                console.log("New README.md file generated inside the output folder");
            }
        })

        console.log(mark)
        return answers;
    })
    .catch((error)=>{
        console.log(error);
    })
}

// Function call to initialize app
init();
