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

      return;
    };

    terminal.question('\nEnter content\n', (content) => {
      fs.writeFile(`./src/${fileName}.txt`, content, (error) => {
        const message = error ? 'Error' : 'Success';

        terminal.write(message);
        terminal.close();
      });
    });
  });
}

createFile();
