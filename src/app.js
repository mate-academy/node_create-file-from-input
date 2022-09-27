'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const fs = require('fs/promises');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Please, enter file name: ');

terminal.on('line', (fileName) => {
  if (fileName.trim() !== ''
      && /^[^/?*:;{}\\]*\.?[^/?*:;{}\\]+$/.test(fileName)) {

    terminal.question('Please, enter content: ', (fileContent) => {
      terminal.close();

      fs.writeFile(fileName, fileContent)
        .then(() => console.log('\x1b[32m', `Success`))
        .catch(() => console.log('\x1b[31m', `Error`));
    });
  } else {
    console.log('Invalid filename, try again:');
  }
});
