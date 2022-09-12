'use strict';

const fs = require('fs');
const { promptFileName, promptFileContent } = require('./prompts');

async function createFile(terminal) {
  const fileName = await promptFileName(terminal);
  const fileContent = await promptFileContent(terminal);

  fs.writeFile(`./${fileName}.txt`, fileContent, (err) => {
    if (err) {
      console.log('Error');
    } else {
      console.log('Success');
    }
  });
}

module.exports = {
  createFile,
};
