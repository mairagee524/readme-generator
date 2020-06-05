// # Unit 09 Node.js and ES6+ Homework: Good README Generator

// When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

// Your task is to create a command-line application that dynamically generates a professional README.md from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). Review the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md) as a reminder of everything that a quality, professional README contains. The application will be invoked with the following command:

// ```
// node index.js
// ```

// Because this is a command-line application that won’t be deployed, you’ll also need to provide a link to a walkthrough video that demonstrates the functionality of your application. Revisit the Screencastify Tutorial in the prework as a refresher on how to record video from your computer.

// ## User Story

// ```
// AS A developer
// I WANT a README generator
// SO THAT can quickly create a professional README for a new project
// ```

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```



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



// ## Minimum Application Requirements

// * Meets [Submission Requirements](#submission-requirements) in the following section.

// * Functional application.

// * GitHub repository with a unique name and a README describing project.

// * The generated README includes the following sections: 

//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * The generated README includes 1 badge that's specific to the repository.


// ## Submission Requirements

// Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include a video showing us that you got the app working with no bugs. You should include a link to the video in your application's `README.md` file.

// * Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`.

// * `node_modules` is not tracked and uploaded to GitHub. (Hint: It is easy if you create your `.gitignore` file before installing dependencies with npm.)

// * Repo **MUST** include `package.json` with required dependencies. (Hint: Run `npm init` when you first setup the project before installing any dependencies.)

// * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.

// * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.

// * Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.

// ## Commit Early and Often

// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.

// * Your commit history allows you to revert your code base in the event that you need to return to a previous state.

// Follow these guidelines for committing:

// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

// * Don't commit half-done work, for the sake of your collaborators (and your future self!).

// * Test your application before you commit to ensure functionality at every step in the development process.

// We would like you to have more than 200 commits by graduation, so commit early and often!

// ## Submission on BCS

// You are required to submit the following:

// * A walkthrough video demonstrating the functionality of the application. 

// * A sample README.md file for a project repository generated using your application.

// * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

// ## Acceptance Criteria

// ```md
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```

let inquirer = require("inquirer");
let fs = require("fs");


inquirer
  .prompt([
    {
      type: "input",
      message: "Enter your project title:",
      name: "repo"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    },
    { 
      type: "input",
      message: "Enter your project name:",
      name: "project"
    }
  ])

  .then(function(response) {
   console.log(response);


   let data = `
   Repository: ${response.repo}
   `;

   writeFile(data);
});

function writeFile(data) {
    fs.writeFile("README.md", data, function (err) {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}