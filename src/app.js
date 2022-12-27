'use strict';

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileName = '';
let fileContent = '';
const reassignFileName = function(userInput) {
  fileName = userInput;
};
const reassignFileContent = function(userInput) {
  fileContent = userInput;
};

const askQuestion = (question, func) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (userInput) => {
      if (userInput) {
        // eslint-disable-next-line no-console
        console.log(userInput);
        func(userInput);
      }
      resolve();
    });
  });
};

const createFileFromInput = async() => {
  await askQuestion('File name:', reassignFileName);
  await askQuestion('File content:', reassignFileContent);
  rl.close();

  fs.writeFile(`./${fileName}`, fileContent, (error) => {
    // eslint-disable-next-line no-console
    console.log(error ? 'Error' : 'Success');
  });
};

createFileFromInput();
