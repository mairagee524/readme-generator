# README Generator


## Description
The user is able to create a README file with a CLI application. 


## Steps
1. The user will need to type npm init to initialize npm, since Inquirer is an npm package. 

2. After, they type `node index.js` to run the application. 

3. A series of questions will appear, where the user will be able to answer them. 

4. The user input will then be added to the generated README file in their appropriate place. 


## Functionality
There are two main files that were used to make this application possible: `index.js` and `generatemarkdown.js`. The `index.js` file is located in the home directory but the `generatemarkdown.js` file is located in the `utils` folder. 

### In the `index.js` File
At the beginning of the `index.js` file, there are many `const` variables that calls to require certain files as a way to import them to this file: 

\`\`\`
const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const markdown = require('../utils/generateMarkdown');
\`\`\`

One more `const` is to promisify the `.writeFile()` function. 

\`\`\`
const writeFileAsync = util.promisify(fs.writeFile);
\`\`\`

After, the `inquirer.prompt[()]` function is invoked, where a series of questions will display on the command line and the user will answer them all. The user input is then manipulated to be part of the `generatemarkdown.js` file with a `.then()` function, that returns a response (the user input, for that matter).

Finally, the data from the `.then()` function is passed in to the `writeFile()` function to generate a README using `writeFileAsync()`. The result should be a stylized README FILE. 

The only task that is missing is: 

- [ ] creating a test to make sure the function works well. 

Because this is a practice application, this will be an ongoing project, where I find and write code to implement a test. This notice will stay here until I develop a test. 

### In the `generatemarkdown.js` File
This file contains all the markup needed to make the README file more stylized. It is comprised of a function that is exported to be part of the `index.js` file. This function `generatemarkdown` has a `return` command with a template literal. This BIG template literal has many markup sections with variables generated from user input. 

## Final Product
In the end, the user will have stylized README file based on his/her/their input. This generated file is located inside the `Assignment Files` folder. 
