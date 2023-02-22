/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const fs = require('fs');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.setPrompt('Please provide a file name  ');
terminal.prompt();

terminal.on('line', (filename) => {
  if (!filename) {
    console.log('Error: File name cannot be empty');
    terminal.prompt();
  } else {
    terminal.removeAllListeners('line');
    terminal.setPrompt('Please provide a content for the file  ');
    terminal.prompt();

    terminal.on('line', (content) => {
      fs.writeFile(filename, content, (error) => {
        if (error) {
          console.log('Error');
        } else {
          console.log('Success');
        }
        terminal.close();
      });
    });
  }
});
