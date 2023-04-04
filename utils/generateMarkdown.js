// const renderLicense = (data) => {
//     if (data.license) {
//         return `## License
//         whichever license is needed
//         `
//     }
//     else  {
//         return
//     }
// }



// const generateMarkdown = (data) => {
//     return `# ${data.title}
//     ${renderLicense(data)}
//     `;
// }

function renderLicense(license){
    if (license !== 'No License'){
        return ""
    } else {
        return "https://img.shields.io/badge/License-MIT-yellow.svg"
    }
}

function renderLicenseLink(license){
    if (license !== 'No License'){
        return ""
    } else {
        return "https://opensource.org/licenses/MIT"
    }
}

function renderLicenseSection(license){
    if (license !== 'No License'){
        return ""
    } else {
        return "This project is licensed under the MIT license."
    }
}

const generateMarkdown = (data) => {
    return `# ${data.title}
    
 ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Test](#test)
- [Github](#github)
- [Email](#email)

    
## Description
${data.description}
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
${data.license}
    
## Contributors
${data.contributors}
    
## Test
${data.test}
    
## Github
${data.github}
    
## Email
${data.email}
    
    
    `;
}

module.exports = generateMarkdown;