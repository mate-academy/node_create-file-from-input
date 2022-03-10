'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let fileName;
let fileContent;

terminal.question('Enter file name: ', (name) => {
  fileName = name;

  terminal.question('Enter file content: ', (content) => {
    fileContent = content;

    fs.writeFile(`./src/${fileName}.txt`, fileContent, (err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('Error');

        return;
      }
      // eslint-disable-next-line no-console
      console.log('Success');
    });
    terminal.close();
  }
  );
});
