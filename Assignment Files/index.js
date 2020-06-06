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

// Declaring variables to require items
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const markdown = require('../utils/generateMarkdown');

// Promisify
const writeFileAsync = util.promisify(fs.writeFile);

// Inquirer function
inquirer.prompt([
    {
      type: "input",
      message: "Enter the title of your project:",
      name: "title"
    },
    { 
      type: "input",
      message: "Enter your project description. What was your motivation to building this application? What problem does it solve? What did you learn?",
      name: "description"
    },
    { 
      type: "input",
      message: "Write the line of code needed to START your CLI application:",
      name: "installation"
    },
    { 
      type: "input",
      message: "Please indicate the steps needed to RUN your application:",
      name: "steps"
    },
    { 
      type: "input",
      message: "Describe how a potential client should use this application:",
      name: "usage"
    },
    { 
      type: "input",
      message: "If you are interested in contributing to this project, please explain how another user may go about doing so: ",
      name: "contributors",
      
    },
    { 
      type: "input",
      message: "What tutorials did you use to complete this project? tutorials? If anyone collaborated with you on this project, what are their names? If none of this applies, press [enter] to skip:",
      name: "help",
    },
    { 
      type: "input",
      message: "If you listed any collaborators above, please list their Github usernames:",
      name: "collabGithubUsernames"
    },
    { 
      type: "input",
      message: "Write the line of code needed to run a test on your CLI application:",
      name: "test"
    },
    { 
      type: "input",
      message: "Enter your email address:",
      name: "email"
    },
    { 
      type: "input",
      message: "Enter your Github username:",
      name: "username",
    },
])

// Inquirer response
.then(function(response) {
  return writeFile("README.md", response);
});

// Function to write file
function writeFile(fileName, data) {
  const readMeFunction = markdown.generateMarkdown(data);
  writeFileAsync(fileName, readMeFunction);
}