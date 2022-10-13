/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { writeFile } = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processFile = () => {
  terminal.question('Enter file name: ', fileName => {
    if (!fileName) {
      processFile();
    }

    terminal.question('Enter file content: ', fileContent => {
      writeFile(fileName, fileContent, 'utf-8', err => {
        if (err) {
          console.log('Error');
        } else {
          console.log('Success ');
        }

        process.exit();
      });
    });
  });
};

processFile();
