/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function enterFileNameDialog() {
  terminal.question('Enter a file name\n', (name) => {
    let nameFile;

    if (name.length === 0) {
      console.log('You should specified name of file');
      enterFileNameDialog();
    } else {
      nameFile = name;
      enterContentFileDialog(nameFile);
    }
  });
};

function enterContentFileDialog(nameFile) {
  terminal.question('Enter a content of file\n', (content) => {
    let contentFile;

    if (content.length === 0) {
      console.log('You should specified content of file');
      enterContentFileDialog();
    } else {
      contentFile = content;

      fs.writeFile(`${nameFile}`, `${contentFile}`, (err, data) => {
        if (err) {
          console.log(`Error`);

          return;
        }

        console.log(`Success`);
      });
    }
  });
};

enterFileNameDialog();
