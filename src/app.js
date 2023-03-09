/* eslint-disable no-console */
'use strict';

const terminal = require('./modules/terminal');
const fs = require('fs');

const createFile = (fileName) => {
  terminal.question('How about the content? ', (content) => {
    fs.appendFileSync(`./${fileName}`, content, (error) => {
      console.log(error);
    });

    terminal.close();
  });
};

const start = () => {
  terminal.question('Enter a file name: ', (fileName) => {
    const name = fileName.trim();

    if (name.length) {
      createFile(fileName);
    } else {
      console.log("File name can't be empty");
      start();
    }
  });
};

start();
