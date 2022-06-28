/* eslint-disable no-console */
'use strict';

const prompt = require('prompt');
const fs = require('fs/promises');

prompt.start();

prompt.get(['fileName', 'fileContent'], function(err, result) {
  if (err) {
    return onErr(err);
  }

  writeFile(result.fileName, result.fileContent);
});

function onErr(_err) {
  console.log('Error');

  return 1;
}

// eslint-disable-next-line no-unused-vars
async function writeFile(fileName, fileContent) {
  try {
    await fs.writeFile(`./src/${fileName}`, fileContent);

    console.log('Success');
  } catch (err) {
    console.log('Error');
  }
}
