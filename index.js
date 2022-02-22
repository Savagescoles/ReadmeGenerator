const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'Repo',
        message: 'What is the name of your repo? No spaces please :)',
      },
      {
        type: 'input',
        name: 'Title',
        message: 'What do you want to title to be?',
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Please enter a brief description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installation Instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Usage information',
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'Something about contribution',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Something about tests',
      },
      {
        type: 'input',
        name: 'instruction',
        message: 'Instruction something or other',
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: [
          {
            name: "Apache 2.0",
            value:
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br/>",
          },
          {
            name: "The MIT License",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)<br/>",
          }, 
          {
            name: "Apache 2.0",
            value:
              "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)<br/>",
          },
  
          {
            name: "Boost 1.0",
            value:
              "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)<br/>",
          },
        ],
      },
    ]);
  };
  

// TODO: Create a function to write README file
/* function writeToFile(fileName, data) {} */

const generateREADME = ({Title, Description, installation, usage, license, Contribution, test, instruction, github }) => 
`
# 09 Homework: ${Title}

## Description 


${Description}

## Table of Contents 

- [Description](#Description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Testing](#testing)

## Installation


${installation}

## Usage


${usage}

## License

${license}

## Contribution

${Contribution}

## Test

${test}

## Instructions

${instruction}

## GitHub

If you would like to vist my profile please feel free!
[GitHub Profile](https://github.com/${github})
[![Ben](https://github.com/${github}.png?size=200)](https://github.com/${github})

`


const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully created README.md file :P'))
        .catch((err) => console.error(eer));
};

// Function call to initialize app
init();
