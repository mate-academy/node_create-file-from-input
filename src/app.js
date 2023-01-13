/* eslint-disable no-console */
import readline from 'readline';
import fs from 'fs';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function createFile() {
  terminal.question('Please enter a file name: ', (fileName) => {
    if (!fileName) {
      console.log('You must enter a file name \n');
      createFile();

      return;
    }

    terminal.question('Please enter a file content: ', (fileContent) => {
      fs.writeFile(`./src/${fileName}.txt`, fileContent, (error) => {
        if (!error) {
          console.log('Success ');
        } else {
          console.log('Error');
        }
      });

      terminal.close();
    });
  });
}

createFile();
