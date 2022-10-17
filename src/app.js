/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const createFile = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const createFilePath = (fileName) => `./${fileName}.txt`;

createFile.question('Enter file name:', (fileName) => {
  createFile.question('Enter file content:', (fileContent) => {
    fs.writeFile(createFilePath(fileName), fileContent, (error) => {
      if (error) {
        console.log(`Error: ${error}`);
      }
      console.log('Success');
    });
    createFile.close();
  });
});
