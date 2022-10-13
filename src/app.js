'use strict';

const fs = require('fs');
const readline = require('readline');

// eslint-disable-next-line no-console
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFile = () => {
  rl.question('Enter file name: ', (fileName) => {
    if (fileName.trim() === '') {
      log('File name cannot be empty');
      createFile();
    } else if (fs.existsSync(fileName)) {
      log('File already exists');
      createFile();
    } else {
      rl.question('Enter file content: ', (fileContent) => {
        if (fileContent.trim() === '') {
          rl.question(
            'File content cannot be empty. '
            + 'Do you want to create an empty file? (y/n): ',
            (answer) => {
              if (answer.toLowerCase() === 'y') {
                fs.writeFile(fileName, '', (err) => {
                  if (err) {
                    throw err;
                  }
                  log('File created successfully');
                  rl.close();
                });
              } else {
                createFile();
              }
            });
        } else {
          fs.writeFile(fileName, fileContent, (err) => {
            if (err) {
              throw err;
            }
            log('File created successfully');
            rl.close();
          });
        }
      });
    }
  });
};

createFile();
