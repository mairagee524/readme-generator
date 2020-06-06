// function to generate markdown for README
module.exports.generateMarkdown = function (data) {
  return `# ${data.title}


## Description

${data.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)


## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${data.installation}
\`\`\`

${data.steps}


## Usage

${data.usage}


## Collaborating Efforts

${data.contributors}


## Credits

${data.help}

Their Github usernames are ${data.collabGithubUsernames}, respectively. 


## Tests

To run tests for this application, use

\`\`\`
${data.test}
\`\`\`


## Questions

If you have any questions about my project, please contact me at ${data.email}, or check out my Github at wwww.github.com/${data.username}.
`;
}