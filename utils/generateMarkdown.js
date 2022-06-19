// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badges ={
        mit:'[![License: MIT](https://img.shields.io/badge/License-MIT-orange?style=flat&logo=appveyor)](https://choosealicense.com/licenses/mit/)',
        isc:'[![License: ISC](https://img.shields.io/badge/License-ISC-red?style=flat&logo=appveyor)](https://choosealicense.com/licenses/isc/)',
        gnugplv3:'[![License: GNUGPLv3](https://img.shields.io/badge/License-GNU--GPLv3-blue?style=flat&logo=appveyor)](https://choosealicense.com/licenses/gpl-3.0/)',
        apache:'[![License: Apache](https://img.shields.io/badge/License-Apache-yellowgreen?style=flat&logo=appveyor)](https://choosealicense.com/licenses/apache-2.0/)'
    }
    
    return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLinks ={
        mit:'[MIT](https://choosealicense.com/licenses/mit/)',
        isc:'[ISC](https://choosealicense.com/licenses/isc/)',
        gnugplv3:'[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
        apache:'[Apache](https://choosealicense.com/licenses/apache-2.0/)'
    }
    return licenseLinks[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    const licenseLink = renderLicenseLink(license)
    if(license){
        return `Licensed under the ${licenseLink} License.`
    }
    else{
        return ``;
    }
}

// Create a function to generate markdown for README
function generateMarkDown(data) {

const licenseBadge = renderLicenseBadge(data.License);
// const data.licenseSection = renderLicenseSection(data.license);

return `

# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of content
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installtion

To install dependencies, run the following;

\`
${data.installation}
\`

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

To run Test, run the following:

\`
${data.tests}
\`

## Questions

Please Contact me at \n
Email : [${data.email}](mailto:${data.email}). \n
GitHub : [${data.github}](https://github.com/${data.github})

`;
}



module.exports = generateMarkDown;
