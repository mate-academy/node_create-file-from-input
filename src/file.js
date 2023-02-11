'use strict';

const fs = require('fs/promises');

const createFile = async(fileName, content) => {
  try {
    const file = await fs.appendFile(`${fileName}.txt`, content);

    // eslint-disable-next-line no-console
    console.log('File created successfully!'.green);

    return file;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = createFile;
