/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { writeFile } = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const processFile = () => {
  terminal.question('Please, enter the file name ', (fileName) => {
    if (!fileName.trim()) {
      console.log("File name can't be empty");
      processFile();
    }

    terminal.question('Please, enter the content ', (content) => {
      writeFile(fileName, content, 'utf8', (err) => {
        if (err) {
          console.log('Error');
        } else {
          console.log('Success');
        }
      });

      terminal.close();
    });
  });
};

processFile();
