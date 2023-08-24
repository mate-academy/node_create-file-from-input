"use strict";

const readline = require("readline");
const fs = require("fs/promises");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userFilename = "";

function controller(flag, value) {
  if (flag === "filename") {
    getFileData(value);
  } else if (flag === "content") {
    fileCreation(value);
  }
}

function getFileData(value) {
  if (value === undefined || value.length === 0) {
    terminal.question("Please enter name of new file: \n", (value) =>
      controller("filename", value)
    );
  }

  userFilename = value;

  terminal.question("Please enter content of the file: \n", (value) =>
    controller("content", value)
  );
}

function fileCreation(value) {
  fs.writeFile(`src/${userFilename}.txt`, value)
    .then((res) => {
      console.log("Success");
    })
    .catch((err) => {
      console.log("Error");
    })
    .finally(() => {
      terminal.close();
    });
}

controller("filename");
