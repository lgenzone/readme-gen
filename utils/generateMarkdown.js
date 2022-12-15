// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (license != 'None') {
    return `![License badge](https://img.shields.io/badge/license-${license}-green})`
  } else {
    return '';

  }
 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT'
    case 'Apache':
      return 'https://opensource.org/licenses/Apache-2.0'
    case 'BSD':
      return 'https://opensource.org/licenses/BSD-3-Clause'
    case 'GPL':
      return 'https://opensource.org/licenses/gpl-license'
    case 'MPL':
      return 'https://opensource.org/licenses/MPL-2.0'
    case 'None':
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license != 'none') {
    licenseSection += '## License \n'
    licenseSection += `This project is protected under the ${license} license. Please visit ${renderLicenseLink} to learn more about this license.`
  }

  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}

  ## Usage 
  ${data.usage}

  ## Testing 
  ${data.tests}

  ## License 
  ${renderLicenseSection}

  ## Questions 
  
  For questions related to this project, please reach out to me using the links below. 
  * Github: https://github.com/${data.github}
  * Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
