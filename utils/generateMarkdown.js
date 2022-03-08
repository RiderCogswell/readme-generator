// generate markdown for README
const generateMarkdown = data => {
  // empty license
  let licenseOption = `${data.license}`;
  let licenseLink = '';

  // conditionals for license choice
  if (licenseOption === 'MIT License') {
    licenseLink = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenseOption === 'Boost Software License 1.0') {
    licenseLink = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (licenseOption === 'The Unlicense') {
    licenseLink = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (licenseOption === 'None') {
    licenseLink = 'below'
  };

  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#tests)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  * ${data.contributors}

  ## Tests
  ${data.tests}

  ## License
  This project is licensed under the ${data.license} 

  For more information click ${licenseLink}

  ## Questions
  [GitHub](https://github.com/${data.github})  
  [Email Me!](mailto:${data.email})
  `;
};

module.exports = generateMarkdown;
