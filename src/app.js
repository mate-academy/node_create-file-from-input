/* eslint-disable no-console */
'use strict';

const readlineSync = require('readline-sync');
const fs = require('fs');

const fileName = readlineSync.question('Enter a file name: ');
const fileData = readlineSync.question('Enter the file data: ');

fs.writeFile(`./${fileName}.txt`, fileData, (err) => {
  if (err) {
    console.log('Error');
  } else {
    console.log('Success');
  }
});
