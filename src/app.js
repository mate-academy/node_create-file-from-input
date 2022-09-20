/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionForUser = (question) => {
  return new Promise((resolve) => {
    terminal.question(question, (answer) => {
      if (!answer.length) {
        console.log('Enter at least one character');

        return questionForUser(question);
      }
      resolve(answer);
    });
  });
};

const createFile = async() => {
  const fileName = await questionForUser('Please, enter a file name: ');
  const fileContent = await questionForUser('Please, enter a file content: ');

  fs.writeFile(`src/${fileName}.txt`, `${fileContent}`, (error) => {
    if (error) {
      console.log('Error');
    } else {
      console.log('Success');
    }
  });

  terminal.close();
};

createFile();
