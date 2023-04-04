const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");



// const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your project."
    },

    {
        type: "input",
        name: "installation",
        message: "Please describe the installation process."
    },

    {
        type: "input",
        name: "usage",
        message: "Please describe the usage of your project."
    },
    {
        type: "input",
        name: "license",
        message: "Please describe the license of your project."
    },
    
    {
        type: "input",
        name: "contributors",
        message: "Please describe the contributors of your project."
    },

    {
        type: "input",
        name: "test",
        message: "Please describe the test of your project."
    },

    {
        type: "input",
        name: "github",
        message: "Please enter your github username."
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    }];


// const writeFile = (fileName, data) => {
//     fs.writeFile(fileName, data, function(err) {
//         console.log(data),
//         err ? console.log(err) : console.log("README has been generated!")
//     })
// }


    // inquirer.prompt(questions)
    // .then(function(data) {
    //     writeFile("README.md", generateMarkdown(data));
    //     console.log(data)
    // })


    inquirer.prompt(questions)
    .then(data => {
        fs.writeFileSync("generatedREADME.md", generateMarkdown(data))
    }
);

// init()
