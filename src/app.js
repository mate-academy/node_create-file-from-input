/* eslint-disable no-console */
/* eslint-disable max-len */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let filename = '';
let fileContent = '';

const question1 = () => {
  return new Promise((resolve) => {
    terminal.question('please enter name of the file:\n', (enteredFileName) => {
      filename = enteredFileName;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve) => {
    terminal.question('please write down file content:\n', (enteredFileContent) => {
      fileContent = enteredFileContent;
      resolve();
    });
  });
};

const main = async() => {
  await question1();
  await question2();
  console.log(filename, fileContent);

  fs.writeFile(`${filename}.txt`, `${fileContent}`, (err) => {
    if (err) {
      console.log(err);
    }
  });

  terminal.close();
};

main();

// node ./src/app.js
