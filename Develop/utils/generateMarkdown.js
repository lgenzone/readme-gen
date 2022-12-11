// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';

  if (license != 'none') {
    badge = `![License badge](https://img.shields.io/badge/license-${license}-green})`
  }
  
  return badge;
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
    case 'none':
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, link) {
  let licenseSection = '';

  if (license != 'none') {
    licenseSection += '## License \n'
    licenseSection += `This project is protected under the ${license} license. Please visit ${link} to learn more about this license.`
  }

  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

`;
}

module.exports = generateMarkdown;
