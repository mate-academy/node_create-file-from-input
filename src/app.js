/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { createFile } = require('./createFile');

(() => {
  let name;
  let content;

  const fileNameQuestion = () => {
    terminal.question('Enter file name', (fileName) => {
      if (fileName.length) {
        name = fileName;
        contentQuestion();
      } else {
        console.log('File name must has some length!');
        fileNameQuestion();
      }
    });
  };

  const contentQuestion = () => {
    terminal.question('Enter file content', (fileContent) => {
      if (fileContent.length) {
        content = fileContent;
        createFile(name, content);
        terminal.close();
      } else {
        console.log('File content must has some length!');
        contentQuestion();
      }
    });
  };

  fileNameQuestion();
})();
