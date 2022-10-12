'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  terminal.question('Enter the name\n', (fileName) => {
    if (!fileName) {
      createFile();
    } else {
      terminal.question('\nEnter content\n', (content) => {
        fs.writeFile(`./src/${fileName}.txt`, content, (error) => {
          if (!error) {
            terminal.write('Success');
            terminal.close();
          } else {
            terminal.write('Error');
            terminal.close();
          }
        });
      });
    }
  });
}

createFile();
