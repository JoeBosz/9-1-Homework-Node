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

const generateMarkdown = (data) => {
    return `# ${data.title}
    
    ## Table of Contents
    - [Description](#description)
    
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