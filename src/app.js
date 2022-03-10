'use strict';

const readline = require('readline');
const fs = require('fs/promises');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (args) => 
  new Promise((resolve, reject) => terminal.question(args, resolve, reject));

async function createFile() {
  const filename = await question('Please, enter the file name\n');

  const content = await question('Please, enter the content\n');

  fs.writeFile(`./${filename}`, content)
    .then(() => {
      terminal.write('Success\n');
      terminal.close();
    })
    .catch(err => {
      terminal.write(`Error: ${err}\n`);
      terminal.close();
    });
};

createFile();
