// // const renderLicense = (data) => {
// //     if (data.license) {
// //         return `## License
// //         whichever license is needed
// //         `
// //     }
// //     else  {
// //         return
// //     }
// // }



// // const generateMarkdown = (data) => {
// //     return `# ${data.title}
// //     ${renderLicense(data)}
// //     `;
// // }

// function renderLicense(license){
//     if (license !== 'No License'){
//         return ""
//     } else {
//         return "https://img.shields.io/badge/License-MIT-yellow.svg"
//     }
// }

// function renderLicenseLink(license){
//     if (license !== 'No License'){
//         return ""
//     } else {
//         return "https://opensource.org/licenses/MIT"
//     }
// }

// function renderLicenseSection(license){
//     if (license !== 'No License'){
//         return ""
//     } else {
//         return "This project is licensed under the MIT license."
//     }
// }

// const generateMarkdown = (data) => {
//     return `# ${data.title}
    
//     ## Table of Contents
//     - [Description](#description)
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [License](#license)
//     - [Contributors](#contributors)
//     - [Test](#test)
//     - [Github](#github)
//     - [Email](#email)
    
    
//     ## Description
//     ${data.description}
    
//     ## Installation
//     ${data.installation}
    
//     ## Usage
//     ${data.usage}
    
//     ## License
//     ${data.license}
    
//     ## Contributors
//     ${data.contributors}
    
//     ## Test
//     ${data.test}
    
//     ## Github
//     ${data.github}
    
//     ## Email
//     ${data.email}
    
    
//     `;
// }

// module.exports = generateMarkdown;


function renderLicenseBadge(license) {
    if (license == "No license") {
      return ""
    } else {
      return `https://img.shields.io/badge/License-${license}-blue?style=flat-square`
    }
  }
  
  
  function renderLicenseLink(license) {
    if (license == "No license") {
      return ""
    } else {
      return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase().split(' ').join('-')})`
    }
  }
  
  
  function renderLicenseSection(license) {
    if (license == "No License") {
      return ""
    } else {
      return `## License
  
    ${renderLicenseLink(license)}
  
      `
    }
  }
  
  // Framework for markdown file based on user input
  function generateMarkdown(data) {
    return `
    # ${data.title} ![license badge](${renderLicenseBadge(data.license)})
  
    ## Description
    
    ${data.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${data.installation}
    
    ## Usage
    
    ${data.usage}
  
    ${renderLicenseSection(data.license)}
    
    ## Contributing
    
    ${data.contribution}
    
    ## Tests
    
    ${data.tests}
  
    ## Questions
  
    - Please visit my Github page at [github.com/${data.github}](https://github.com/${data.github})
    - For additional questions, please [send me an email](mailto:${data.email})
  
  `;
  }
  
  module.exports = generateMarkdown;