'use strict';

const readline = require('readline');
const fs = require('fs/promises');

const start = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  let fileName = '';
  let fileContent = '';

  const createAFile = () => {
    fs.writeFile(`./${fileName}`, fileContent);

    fs.readFile(`./${fileName}`, 'utf8')
      .then(() => {
        console.log('Success');
      })
      .catch(() => {
        console.log('Error');
      })
      .finally(() => {
        terminal.close();
      })
  }

  const getFileContent = () => {
    terminal.question('Enter a file content ', (content) => {
      if (!content.trim()) {
        getFileContent();

        return;
      }

      fileContent = content;

      createAFile();
    });
  }

  const getFileName = () => {
    terminal.question('Enter a file name ', (name) => {
      if (!name.trim()) {
        getFileName();

        return;
      }

      fileName = name;

      getFileContent();
    });
  }

  getFileName();
}

start();
