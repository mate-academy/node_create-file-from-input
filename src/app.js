'use strict';

const fs = require('fs');
const { terminal } = require('./terminal');

const question = (questions) => {
  return new Promise((resolve) => {
    terminal.question(questions, (answer) => {
      resolve(answer);
    });
  });
};

const main = async() => {
  let fileName = await question('Please enter a file name: ');

  if (!fileName) {
    terminal.write('You must enter a file name \n');
    fileName = await question('Please enter a file name: ');
  }

  const fileContext = await question('Please enter a file content: ');

  fs.writeFile(`./src/${fileName}`, fileContext, (error) => {
    if (error) {
      terminal.write('Error');
      terminal.close();

      return;
    }

    terminal.write('Success');
    terminal.close();
  });
};

main();
