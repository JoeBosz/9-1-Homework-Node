const inquirer = require("inquirer");
const fs = require("fs")


// const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    }
    // description question
    // installation question
    // usage question
    // license question
    // contributors
    // did you test and how did you
    //github username
    // email
]

const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
        err ? console.log(err) : console.log("README has been generated!")
    })
}

const init = () => {
    inquirer.createPromptModule(questions)
    .then(function(data) {
        writeFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

init()
