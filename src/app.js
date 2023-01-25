'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = async() => {
  terminal.question('Enter the name of the file\n', (fileName) => {
    if (!fileName) {
      createFile();

      return;
    }

    terminal.question('\nEnter contents of the file\n', (fileContent) => {
      fs.writeFile(`./src/${fileName}.txt`, fileContent, (error) => {
        const message = error ? 'Error' : 'Success';

        terminal.write(message);
        terminal.close();
      })
    })
  })
}

createFile();
