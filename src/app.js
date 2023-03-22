/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  rl.question('Enter the file name\n', (fileName) => {
    if (fileName) {
      rl.question('Enter  the file content\n', (fileContent) => {
        fs.writeFile(fileName, fileContent, (error) => {
          if (error) {
            console.log(error);
          } else {
            console.log('The file has been created successfully');
          }
          rl.close();
        });
      });
    }

    if (!fileName) {
      console.log('The file name can\'t be empty');
      createFile();
    }
  });
};

createFile();
