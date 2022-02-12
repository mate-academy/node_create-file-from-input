'use strict';

const fs = require('fs');

module.exports.createFile = (name, content = '') => {
  fs.writeFile(`./${name}`, content, (err, data) => {
    if (err) {
      console.log(err);

      return;
    }

    console.log(`File { ${name} } created!`);
  });
};
