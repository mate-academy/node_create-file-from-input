'use strict';

const fs = require('fs');
const readline = require('readline');
const myConsole = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

myConsole.question('Enter please file name ', (fileName) => {
  myConsole.question('Enter please content ', (fileContent) => {
    fs.writeFile(fileName, fileContent, (error) => {
      myConsole.output.write(error ? 'Error' : 'Success');
      myConsole.close();
    });
  });
});
