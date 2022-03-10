'use strict';

const fs = require('fs');

module.exports.createFile = (name, content = '') => {
  fs.writeFile(`./${name}`, content, (err, data) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);

      return;
    }

    // eslint-disable-next-line no-console
    console.log(`File { ${name} } created!`);
  });
};
