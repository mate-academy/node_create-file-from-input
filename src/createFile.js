/* eslint-disable no-console */
'use strict';

const fs = require('fs');

const createFile = (name, content) => {
  fs.writeFile(name, content, (err, data) => {
    if (err) {
      throw new Error(err);
    }

    console.log('Succes, file was created', data);
  });
};

module.exports = { createFile };
