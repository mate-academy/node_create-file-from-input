/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const { exit } = require('process');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const SUCCESS = 'Success';
const NEW_FILE_MESSAGE = 'Enter a name for the new file';
const NEW_NOTE_MESSAGE = 'New note';

readline.question(`${NEW_FILE_MESSAGE}: `, (fileName) => {
  readline.question(`${NEW_NOTE_MESSAGE}: `, (note) => {
    fs.appendFile(`./${fileName}.txt`, `\n${note}`, (error) => {
      if (error) {
        console.log(`======= ${error} =======`);
        exit();
      }

      console.log(`======= ${SUCCESS} =======`);
      exit();
    });
  });
});
