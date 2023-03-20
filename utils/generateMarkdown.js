const renderLicense = (data) => {
    if (data.license) {
        return `## License
        whichever license is needed
        `
    }
    else  {
        return ""
    }
}



const generateMarkdown = (data) => {
    return `# ${data.title}
    ${renderLicense(data)}
    `;
}

module.exports = generateMarkdown