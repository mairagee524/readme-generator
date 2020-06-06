// # Unit 09 Node.js and ES6+ Homework: Good README Generator
// Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
// ```sh
// node index.js
// ```
// The user will be prompted for their GitHub username and other information pertaining to the project the README is for.
// The README will be populated with the following:
// - Project title
// - Description
// - Table of Contents
// - Installation
// - Usage
// - Contributing
// - Tests
// The subsequent generated data will then be styled using the generateMarkdown.js file found within the utils folder.
// Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:
// ```
// AS A developer
// I WANT a README generator
// SO THAT I can easily put together a good README for a new project
// ```
// Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).
// ## Business Context
// When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

// ## Minimum Requirements
// - Functional, deployed application.
// - GitHub repository with a unique name and a README describing project.
// - The generated README includes the following sections:
//   - Title
//   - Description
//   - Table of Contents
//   - Installation
//   - Usage
//   - Contributing
//   - Tests
// ```
// GIVEN the developer has a GitHub profile and a repository
// WHEN prompted for the developer's GitHub username and repo specific information
// THEN a README for the repo is generated
// ```
// ---
// ## Commit Early and Often
// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:
// - Your commit history is a signal to employers that you are actively working on projects and learning new skills.
// - Your commit history allows you to revert your code base in the event that you need to return to a previous state.
// Follow these guidelines for committing:
// - Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.
// - Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.
// - Don't commit half-done work, for the sake of your collaborators (and your future self!).
// - Test your application before you commit to ensure functionality at every step in the development process.
// We would like you to have more than 200 commits by graduation, so commit early and often!
// ## Submission on BCS
// You are required to submit the following:
// - A video demonstrating the entirety of the app's functionality
// - A generated README.md file for a project repo.
// - The URL of the GitHub repository



// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

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

## License

## Conributing

## Tests

## Questions

`;
}

module.exports = generateMarkdown;



// Hello! It's great to see the application is functioning. It can be difficult to know where to go from here since we can't use CSS to format what next. Based on your code you simply need to continue following the pattern you see with line 30: ${data.installation}
// You can continue with:
// ## Usage
// ${data.usage}
// etc....
// You can also use a function like this:
// ## Usage
// ${someFunctionToFormatUsage(data.usage)}
// Example Function: function someFunctionToFormatUsage(usage) {
//  if (usage !== "None") {
//    return (
//      `## Usage
// This project is used for ${usage}.`
//    )
//  }
//  return ''
// }
// Play around with this and if you continue to have trouble reach out again. Thank you!
// -Aaron
