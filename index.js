const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utilis/generateMarkdown')

//  Questions for user imput
const questions = [
    {
      type: 'input',
      name:  'creator',
      message: 'What is your GitHub user name?',
     
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'what is your projects name?',
      
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project.',
      
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'APACHE2.0', 'GPL3.0','BSD3', 'none'],
    },
    {
      type: 'input',
      name: 'require',
      message: 'list of project dependencies?',    
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Language or technologies associated with this project?',    
    },
    {
      type: 'input',
      name: 'contriubtors',
      message: 'Please list of any contributors. (Use GitHub usernames)',  
      default: '',  
    },    {
      type: 'input',
      name: 'name',
      message: ' State your full name.',    
    },
  ]
  

  //  Create a function to write README file
    function writeToFile(fileName, data) {
      return fs.writeFileSync(path.join(process.cwd(), fileName),data)
    }
  
  
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log('Creatign Professional README.md file..');
      writeToFile('./dist/README.md', generateMarkdown({...responses}))
    });
  }
  
  // Function call to initialize app
  init();
  
  

