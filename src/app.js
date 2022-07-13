'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('Enter the file name: ', (fileName) => {
  terminal.question('Write the content: ', (content) => {
    fs.writeFile(fileName, content, (error, data) => {
      if (error) {
        console.log('Error');
      }

      console.log('Success');
    });

    terminal.close();
  });
});
