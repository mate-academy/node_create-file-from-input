/* eslint-disable no-console */
'use strict';

const fs = require('fs');
const path = require('path');

const createFile = (filename, content) => {
  const filePath = path.join(__dirname, filename);

  fs.writeFile(filePath, content, (error) => {
    if (error) {
      console.log('Error');
    } else {
      console.log('Success');
    }
  });
};

module.exports = { createFile };
