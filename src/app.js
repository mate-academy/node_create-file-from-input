/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = () => {
  terminal.question('Add file name: ', fileName => {
    if (!fileName.trim()) {
      createFile();
    }

    terminal.question('Add file content: ', content => {
      fs.writeFile(fileName, content, (error) => {
        if (error) {
          console.log('Error');
        } else {
          console.log('Success');
        }

        process.exit();
      });
    });
  });
};

createFile();
