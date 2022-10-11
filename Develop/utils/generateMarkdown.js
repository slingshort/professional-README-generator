// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (!license) {
    return ""
  } else if ( lisence === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (lisence === 'Apache License 2.0') {
    return `[![License: Apache Lisence 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (lisence === 'MIT lisence') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (lisence === 'The UniLicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ""
  } else if ( lisence === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (lisence === 'Apache License 2.0') {
    return `[![License: Apache Lisence 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (lisence === 'MIT lisence') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (lisence === 'The UniLicense') {
    return `[!Lisence: The UniLisence](https://img.shields.io/badge/license-The%20Unilcense-blue)](https://unlicense.org/)`
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => 
  `# ${data.title}

  ##Table of Contents
  - [Project Description](#description)
  - [License](#license)
  - [Installation information](#Installation)  
  - [Credits](#Credits)
  - [Extra Info] (#Extra Info)
  - [Contributing](#Contributing)

  ## Description
  ${data.description}

  ## Lisence
  This project is licensed under the ${data.license} lisence

  ## Installation
  ${data.installation}

  ## Testing Information
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Extra Info
  ${data.extra}

  ## Contributing
  ${data.contributing}

`;



module.exports = generateMarkdown;
