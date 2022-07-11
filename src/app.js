/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter the name of the file: ', (fileName) => {
  terminal.question('Enter the content: ', (fileContent) => {
    fs.writeFile(`./${fileName}`, fileContent, (err) => {
      if (err) {
        console.log('Error');
      } else {
        console.log('Success');
      }
    });

    terminal.close();
  });
});
