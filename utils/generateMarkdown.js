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

function generateMarkdown(data)  {
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
    
- Please visit my Github page at [github.com/${data.github}](https://github.com/${data.github})
- For additional questions, please [send me an email](mailto:${data.email})

    
    `;
}

module.exports = generateMarkdown;