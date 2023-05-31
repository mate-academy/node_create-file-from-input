/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  rl.question('Enter the file name: ', (fileName) => {
    if (fileName.trim() === '') {
      console.log('Error: File name cannot be empty.');
      rl.close();

      return;
    }

    rl.question('Enter the content: ', (content) => {
      fs.writeFile(fileName, content, (err) => {
        if (err) {
          console.log('Error:', err.message);
        } else {
          console.log('Success: File created successfully.');
        }
        rl.close();
      });
    });
  });
}

createFile();
