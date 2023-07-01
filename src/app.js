import readline from 'readline';
import fs from 'fs';
import os from 'os';

createFile();

function createFile() {
  const userName = os.userInfo().username;

  let filename;
  let content;

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question(`Hello ${userName},
  please write name of new file \nfileName: `, (newName) => {
    filename = newName;

    terminal.question(`Okay ${userName},
    enter the content\ncontent: `, (newContent) => {
      content = newContent;

      fs.writeFile(filename + '.txt', content, (error, data) => {
        if (error) {
        // eslint-disable-next-line no-console
          console.log('error:' + error);

          return;
        }
        // eslint-disable-next-line no-console
        console.log('created:' + data);
      });
      terminal.close();
    });
  });
}
