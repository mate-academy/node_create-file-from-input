'use strict';

const fs = require('fs');

exports.created = (name, content) => {
  fs.writeFile(`./src/${name}.txt`, `${content}`, (err, data) => {
    if (err) {
    // eslint-disable-next-line no-console
      console.log('Error');
    }
    // eslint-disable-next-line no-console
    console.log('Success');
  });
};
