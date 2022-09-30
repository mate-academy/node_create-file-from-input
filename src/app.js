'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const fs = require('fs/promises');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = () => {
  terminal.question('Please, enter file name: ', (fileName) => {
    if (!fileName.trim()) {
      console.log('File name should at least one letter');

      return createFile();
    }

    terminal.question('Please, enter file content: ', (fileContent) => {
      fs.writeFile(fileName, fileContent)
        .then(() => console.log('Success'))
        .catch(() => console.log('Error'))
        .finally(() => terminal.close());
    });
  });
};

createFile();
