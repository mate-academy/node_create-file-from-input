/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const { terminal } = require('./terminal');

let fileName = '';
let fileContent = '';

terminal.question('Enter the file name\n', (resTitle) => {
  fileName = resTitle;

  if (fileName === '') {
    console.log('Error: enter title.');
    terminal.close();

    return;
  }

  terminal.question('Enter the content\n', (resContent) => {
    fileContent = resContent;

    if (fileName !== '' && fileContent !== '') {
      fs.writeFile(`./sr/${fileName}`,
        fileContent, er => er
          ? console.log('Error', er.code)
          : console.log('Success'));
      terminal.close();
    }
  });
});
