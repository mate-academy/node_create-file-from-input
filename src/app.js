import readline from 'readline';
import fs from 'fs/promises';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function createFile(fileName, content) {
  try {
    await fs.writeFile(`./files/${fileName}.txt`, content);
    console.log('Success');
    terminal.close();
  } catch (error) {
    console.log(error);
  }
};

terminal.question('Enter the file name: ', (name) => {
  terminal.question('Enter the content: ', (content) => {
    createFile(name, content);
  });
});
