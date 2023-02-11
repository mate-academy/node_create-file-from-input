'use strict';

const prompt = require('prompt-sync')();
const colors = require('colors');

colors.enable();

const askFileName = () => {
  const fileName = prompt('Enter a file name: ');

  if (fileName === '') {
    // eslint-disable-next-line no-console
    console.log('You must enter a file name.'.red);

    return askFileName();
  }

  return fileName;
};

const askForContent = () => {
  const content = prompt('Enter content: ');

  if (content === '') {
    // eslint-disable-next-line no-console
    console.log('You must enter content.'.red);

    return askForContent();
  }

  return content;
};

module.exports = {
  askFileName,
  askForContent,
};
