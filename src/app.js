'use strict';

const { askFileName, askForContent } = require('./io');
const createFile = require('./file');

const fileName = askFileName();
const content = askForContent();

createFile(fileName, content);
