/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const makeNewFile = () => {
  terminal.question('Enter a file name ', (fileName) => {
    if (!fileName) {
      makeNewFile();
    }

    terminal.question('Enter the file content ', (content) => {
      fs.writeFile(fileName, content, 'utf-8', (error, data) => {
        if (error) {
          console.log('Something wrong...');
        } else {
          console.log('File has been created!');
        }

        process.exit();
      });
    });
  });
};

makeNewFile();
