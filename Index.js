const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const team = [];

const managerQuestions = [
    {
      type: 'text',
      name: 'name',
      message: 'Enter team manager\'s name: ' 
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter manager\'s employee ID: '
    },
    {
      type: 'text',
      name: 'email',
      message: 'Enter manager\'s email address: '
    },
    {
      type: 'text',
      name: 'office',
      message: 'Enter manager\'s office number: '
    },
    {
      type: 'list',
      name: 'nextEmployee',
      message: 'What role would you like to add to your team?',
      choices: ['Manager', 'Engineer', 'Intern', 'I\'m Finished']
    }
];

const engineerQuestions = [
    {
      type: 'text',
      name: 'name',
      message: 'Enter engineer\'s name: ' 
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter engineer\'s employee ID: '
    },
    {
      type: 'text',
      name: 'email',
      message: 'Enter engineer\'s email address: '
    },
    {
      type: 'text',
      name: 'office',
      message: 'Enter engineer\'s github username: '
    },
    {
      type: 'list',
      name: 'nextEmployee',
      message: 'What role would you like to add to your team?',
      choices: ['Manager', 'Engineer', 'Intern', 'I\'m Finished']
    }
];

const internQuestions = [
    {
      type: 'text',
      name: 'name',
      message: 'Enter intern\'s name: ' 
    },
    {
      type: 'text',
      name: 'id',
      message: 'Enter intern\'s employee ID: '
    },
    {
      type: 'text',
      name: 'email',
      message: 'Enter intern\'s email address: '
    },
    {
      type: 'text',
      name: 'school',
      message: 'Enter intern\'s school: '
    },
    {
      type: 'list',
      name: 'nextEmployee',
      message: 'What role would you like to add to your team?',
      choices: ['Manager', 'Engineer', 'Intern', 'I\'m Finished']
    }
];

const promptManager = () => {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
      this.manager = new Manager(answers.name, answers.id, answers.email, answers.office);
      team.push(this.manager);

      if (answers.nextEmployee === 'Manager') {
        promptManager();
      } else if (answers.nextEmployee === 'Engineer') {
        promptEngineer();
      } else if (answers.nextEmployee === 'Intern') {
        promptIntern();
      } else {
        console.log(team);
      }
    });
}

const promptEngineer = () => {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      this.engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(this.engineer);

      if (answers.nextEmployee === 'Manager') {
        promptManager();
      } else if (answers.nextEmployee === 'Engineer') {
        promptEngineer();
      } else if (answers.nextEmployee === 'Intern') {
        promptIntern();
      } else {
        console.log(team);
      }
    });
}

const promptIntern = () => {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      this.intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(this.intern);

      if (answers.nextEmployee === 'Manager') {
        promptManager();
      } else if (answers.nextEmployee === 'Engineer') {
        promptEngineer();
      } else if (answers.nextEmployee === 'Intern') {
        promptIntern();
      } else {
        console.log(team);
      }
    });
}

const init = () => {
  promptManager();  
} 

init()