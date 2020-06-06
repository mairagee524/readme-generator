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
      message: "Describe how/when a potential client should use this application:",
      name: "usage"
    },
    { 
      type: "input",
      message: "If you are interested in contributing to this project, please explain how another user may go about doing so: ",
      name: "contributors",
      
    },
    { 
      type: "input",
      message: "What tutorials did you use to complete this project? tutorials? If anyone collaborated with you on this project, what are their names and Github usernames? If none of this applies, press [enter] to skip:",
      name: "help",
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
  console.log('The file has been saved!');
  writeFileAsync(fileName, readMeFunction);
}