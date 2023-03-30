/* eslint-disable no-console */
import fs from 'fs';
import readline from 'readline';

let fileName = '';
let fileContent = '';

const ask = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

ask.question('Filename ?', (name) => {
  fileName = name;
});

ask.question('Filecontent ?', (content) => {
  fileContent = content;
});

fs.appendFile(`./${fileName}`, fileContent, (error, data) => {
  if (error) {
    console.log(error);

    return '';
  }

  console.log(data.toString());
});
