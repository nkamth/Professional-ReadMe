// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
    function generateMarkDown(data) {

        return `
        # ${data.title}
      
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
      
       ## Contributing
      
       ${data.contribution}
      
       ## Tests
      
        To run Test, run the following:
      
        \`
        ${data.tests}
        \`
      
        ## Questions
      
        Please Contact me at 
        Email : [${data.email}](mailto:${data.email}).
        GitHub : [${data.github}](https://github.com/${data.github}) 
      
      `;
      }

 

module.exports = generateMarkDown;
