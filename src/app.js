/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const baseURL = './src/newFolders';

terminal.question('Write name of your file > ', (name) => {
  const correctName = name.trim();

  if (correctName) {
    terminal.question('Write content of your file > ', (content) => {
      fs.writeFile(`${baseURL}/${correctName}.txt`, content, (err) => {
        if (err) {
          console.log('Error');
        }

        terminal.close();
      });
      console.log('Success');
    });
  } else {
    console.log('Please enter correct name');
    terminal.close();
  }
});
