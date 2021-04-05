const inquirer = require("inquirer");
const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const start = () => {
    return inquirer. prompt([
        {
            type: "input",
            message: "what is the team manager's name ?",
            name: "name",
        },
        {
            type: "input",
            message: "what is your employeeId",
            name: "employeeId"
        },
        {
            type: "input",
            message: "what is your email adress?",
            name: "email"
        },
        {
            type: "input",
            message: "what is your office number?",
            name: "officeNumber"
        }
    ])
    .then((data) => {
        console.log(data)
        chooseAction()
    })

}


const chooseAction = () => {
    return inquirer.prompt([
        {
            type: "list",
            message:"what would you like to do ?",
            name:"action",
            choices: ["add an engineer", "add an intern", "finish"]
        }
    ])
    .then((data) =>{
        console.log(data)

        if (data.action === "add an engineer"){
            addEngineer()
            
        }
        if(data.action==="add an intern"){
            addIntern();

        }

    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message:"what is the engineer's name?",
            name:"name",
            
        },
        {
            type: "input",
            message:"what is the engineer's employeeId?",
            name:"employeeId",
            
        },
        {
            type: "input",
            message:"what is the engineer's email?",
            name:"email",
            
        },
        {
            type: "input",
            message:"what is the engineer's github username?",
            name:"github",
            
        },
    ])
    .then((data) =>{
        console.log(data)
        chooseAction();


    })
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message:"what is the intern's name?",
            name:"name",
            
        },
        {
            type: "input",
            message:"what is the intern's employeeId?",
            name:"employeeId",
            
        },
        {
            type: "input",
            message:"what is the intern's email?",
            name:"email",
            
        },
        {
            type: "input",
            message:"what is the school intern attended?",
            name:"school",
            
        },
    ])
    .then((data) =>{
        console.log(data)
        chooseAction();


    })
}
//ID, email, and GitHub username

 start()
 //defining employee ID, email address, and office number//