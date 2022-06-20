# Professional README Generator

[![License: MIT](https://img.shields.io/github/license/tiffany-brand/professional-README-generator?style=plastic)](./LICENSE)

## Visual Presentation :

The below link is a demonstration of how this 'deployed' application works. This generates README files that use a consistant format.

View a complete video demonstration of the application: [Professional README Generator Demo](https://drive.google.com/file/d/1jJvz-UHvx99ADuJloZGoQL6FvrwpyiDz/view)

## Table of Contents

- [Description](#description)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Description :

This project is a command line application that automatically generates a professional README markdown file for a repository based on answers from the user. When the application runs, it presents a series of prompts to the user to fill in sections in the README. Then the README markdown file with the user information is saved inside the output folder.

## Acceptance Criteria :

- WHEN I am prompted for information about my application repositor
  - THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
- WHEN I enter my project title
  - THEN this is displayed as the title of the README
- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  - THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
- WHEN I choose a license for my application from a list of options
  - THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
- WHEN I enter my GitHub username
  - THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- WHEN I enter my email address
  - THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- WHEN I click on the links in the Table of Contents
  - THEN I am taken to the corresponding section of the README

## Technologies

- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)

## Installation

- Download it through Github
- Ensure inquirer is installed

## Usage

- Open terminal
- Type 'node index.js'
- Answer the prompts that follow
- On success a README.md will be generated.

Output ReadMe:

<img width="1220" alt="Screen Shot 2022-06-19 at 10 52 48 PM" src="https://user-images.githubusercontent.com/97250880/174517100-0a3162fa-7715-44d1-8d9b-890186b2cfab.png">

<img width="1197" alt="Screen Shot 2022-06-19 at 10 53 49 PM" src="https://user-images.githubusercontent.com/97250880/174517144-7077825e-0a81-4323-8449-9f3c667f846c.png">

## License

This repository is licensed under the [MIT license](./LICENSE).

## Questions

Please contact me at

- GitHub : [nkamth](https://github.com/nkamth)
- Email : [namitha.289@gmail.com](mailto:namitha.289@gmail.com)
