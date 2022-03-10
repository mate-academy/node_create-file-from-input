/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const readline = require('readline-sync');

const file = {};

file.name = readline.question('Enter file name ');
file.content = readline.question('Enter file content ');

console.log('Creating a file...');

fs.writeFile(file.name, file.content, (error, data) => {
  if (error) {
    console.log('Error');

    return;
  }

  console.log('Success');
});
