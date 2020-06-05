function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of Contents

* [Installation](#Installation)

* [Usage](#Usage)

* [License](#License)

* [Contributing](#Contributing)

* [Tests](#Tests)

* [Questions](#Questions)


## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${data.installation}
\`\`\`

## Usage
`;
}

module.exports = generateMarkdown;
