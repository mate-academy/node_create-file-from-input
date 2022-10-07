/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let newFileName = '';

terminal.question('Enter the file name ', (fileName) => {
  newFileName = fileName.trim();

  terminal.setPrompt(`Enter the content for ${newFileName}: `);
  terminal.prompt();
});

terminal.on('line', function(content) {
  fs.writeFile(`./${newFileName}.txt`, content, (error) => {
    if (!error) {
      console.log('File written successfully');
    } else {
      console.log(error);
    }
  });

  terminal.close();
});
