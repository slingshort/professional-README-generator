// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// lisence badge markdown included here with clickable link taking you to lisence info page
function renderLicenseBadge(license) { 
  if (license === null) {
    return ""
  } else if (license === 'GNU GPLv3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Apache License 2.0') {
    return `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT license') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'The UniLicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return ""
  } else if (license === 'GNU GPLv3') {
    return `[GNU GPLv2](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === 'Apache License 2.0') {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'MIT license') {
    return `[MIT license](https://opensource.org/licenses/MIT)`
  } else if (license === 'The UniLicense') {
    return `[The UniLicense](https://unlicense.org/)`
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === null) {
    return ""
  } else { 
    return `## License

  This project is licensed under ${renderLicenseLink(license)}.
  Please click on the link for more information
    `
  } 
}
// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => 
  `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Project Description](#description)
  - [License](#license)
  - [Installation information](#Installation)  
  - [Credits](#Credits)
  - [Extra Info](#Info)
  - [Contributing](#Contributing)

  ## Description
  ${data.description}

  ${renderLicenseSection(data.license)}

  ## Installation
  ${data.installation}

  ## Testing Information
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Info
  ${data.extra}

  ## Contributing
  ${data.contributing}

`;



module.exports = generateMarkdown;
